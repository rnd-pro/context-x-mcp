#!/usr/bin/env node

/**
 * Context[X]MCP Server
 * Multi-agent context enrichment system with auto-detection and tool orchestration
 * 
 * @version 0.1.0-alpha.1
 * @license MIT
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
} from '@modelcontextprotocol/sdk/types.js';

import { ContextCoordinator } from '../agents/coordinator/index.js';
import { ConfigManager } from './config/index.js';
import { Logger } from '../utils/logger.js';

/**
 * Context[X]MCP Server implementation
 */
class ContextXMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'context-x-mcp',
        version: '0.1.0-alpha.1',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.config = new ConfigManager();
    this.logger = new Logger(this.config.get('LOG_LEVEL', 'info'));
    this.coordinator = new ContextCoordinator(this.config, this.logger);

    this.setupHandlers();
  }

  /**
   * Setup MCP request handlers
   */
  setupHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'enrich_context',
            description: 'Comprehensive context enrichment using multi-agent system',
            inputSchema: {
              type: 'object',
              properties: {
                query: {
                  type: 'string',
                  description: 'The query or topic to enrich context for',
                },
                depth: {
                  type: 'string',
                  enum: ['basic', 'detailed', 'comprehensive'],
                  description: 'Level of context enrichment depth',
                  default: 'detailed',
                },
                sources: {
                  type: 'array',
                  items: { type: 'string' },
                  description: 'Preferred sources for context gathering',
                  default: ['web', 'memory', 'tools'],
                },
                enableBrowserResearch: {
                  type: 'boolean',
                  description: 'Enable Browser[X]MCP integration for web research',
                  default: true,
                },
              },
              required: ['query'],
            },
          },
          {
            name: 'detect_topic',
            description: 'Automatic topic detection and classification',
            inputSchema: {
              type: 'object',
              properties: {
                text: {
                  type: 'string',
                  description: 'Text to analyze for topic detection',
                },
                confidence: {
                  type: 'number',
                  description: 'Minimum confidence threshold (0-1)',
                  default: 0.75,
                },
              },
              required: ['text'],
            },
          },
          {
            name: 'search_history',
            description: 'Search context history for relevant information',
            inputSchema: {
              type: 'object',
              properties: {
                query: {
                  type: 'string',
                  description: 'Search query for historical context',
                },
                limit: {
                  type: 'number',
                  description: 'Maximum number of results to return',
                  default: 10,
                },
                similarity: {
                  type: 'number',
                  description: 'Similarity threshold (0-1)',
                  default: 0.8,
                },
              },
              required: ['query'],
            },
          },
        ],
      };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      try {
        const { name, arguments: args } = request.params;

        switch (name) {
          case 'enrich_context':
            return await this.coordinator.enrichContext(args);

          case 'detect_topic':
            return await this.coordinator.detectTopic(args);

          case 'search_history':
            return await this.coordinator.searchHistory(args);

          default:
            throw new McpError(
              ErrorCode.MethodNotFound,
              `Unknown tool: ${name}`
            );
        }
      } catch (error) {
        this.logger.error('Tool execution error:', error);
        throw new McpError(
          ErrorCode.InternalError,
          `Tool execution failed: ${error.message}`
        );
      }
    });

    // Error handling
    this.server.onerror = (error) => {
      this.logger.error('MCP Server error:', error);
    };
  }

  /**
   * Start the MCP server
   */
  async start() {
    try {
      await this.coordinator.initialize();
      
      const transport = new StdioServerTransport();
      await this.server.connect(transport);

      this.logger.info('Context[X]MCP Server started successfully');
      this.logger.info(`Version: 0.1.0-alpha.1`);
      this.logger.info(`Agents: ${this.coordinator.getActiveAgents().length}`);
    } catch (error) {
      this.logger.error('Failed to start server:', error);
      process.exit(1);
    }
  }

  /**
   * Graceful shutdown
   */
  async shutdown() {
    try {
      await this.coordinator.shutdown();
      this.logger.info('Context[X]MCP Server shutdown complete');
    } catch (error) {
      this.logger.error('Error during shutdown:', error);
    }
  }
}

// Start server if running directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const server = new ContextXMCPServer();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    await server.shutdown();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    await server.shutdown();
    process.exit(0);
  });

  // Start the server
  server.start().catch((error) => {
    console.error('Failed to start Context[X]MCP Server:', error);
    process.exit(1);
  });
}

export { ContextXMCPServer }; 