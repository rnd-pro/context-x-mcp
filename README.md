![Context[X]MCP Banner](assets/logo/context-x-mcp-banner.png)

**Multi-Agent Context Enrichment System with Auto-Detection and Tool Orchestration**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![Version](https://img.shields.io/badge/version-0.1.0--alpha.1-orange.svg)
![Status](https://img.shields.io/badge/status-alpha-red.svg)

Context[X]MCP is a Model Context Provider (MCP) server that enables intelligent context enrichment through a multi-agent system with distributed specialized roles, auto-topic detection, and dynamic tool orchestration.

**Enrich your AI context automatically** - Works seamlessly with Cursor, Claude Desktop, VS Code, and other MCP-compatible applications while integrating Browser[X]MCP and other MCP tools.

## ✨ Features

### 🤖 **Multi-Agent Architecture**
- **Context Coordinator**: Intelligent topic detection and agent routing
- **Browser Research Agent**: Web research using Browser[X]MCP integration
- **Memory Agent**: Context history and pattern recognition
- **Tool Orchestrator**: Dynamic MCP tool discovery and management
- **Quality Assessment**: Context relevance scoring and verification

### 🧠 **Auto-Intelligence**
- **Topic Detection**: Automatic context classification and intent recognition
- **Tool Selection**: Dynamic selection of optimal MCP tools based on context
- **Context Enrichment**: Multi-source data gathering and synthesis
- **Pattern Learning**: Adaptive improvement based on usage patterns

### 🔄 **Agent Coordination**
- **Distributed Processing**: Specialized agents with narrow-focused roles
- **Task Distribution**: Intelligent workload balancing across agents
- **Result Aggregation**: Comprehensive context assembly from multiple sources
- **Conflict Resolution**: Smart handling of contradictory information

### 🌐 **Browser[X]MCP Integration**
- **Web Research**: Automated browser-based data collection
- **Real-time Extraction**: Dynamic content discovery and analysis
- **Form Interaction**: Advanced web form handling and data extraction
- **Link Analysis**: Intelligent navigation and content mapping

### 📊 **Context Management**
- **Vector Storage**: Efficient context history with similarity search
- **Relevance Scoring**: AI-powered context quality assessment
- **Memory Persistence**: Long-term context pattern storage
- **Performance Metrics**: Real-time agent coordination efficiency

### 💡 **Intelligent Orchestration**
- **Tool Discovery**: Automatic MCP tool capability mapping
- **Performance Optimization**: Response time and accuracy optimization
- **Resource Management**: Efficient agent resource allocation
- **Scalability**: Horizontal scaling for complex contexts

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/MakerDrive/context-x-mcp.git
cd context-x-mcp

# Install dependencies
npm install

# Copy environment configuration
cp .env.example .env

# Start the server
npm start
```

### MCP Client Configuration

Add to your MCP client configuration:

```json
{
  "mcpServers": {
    "context-x-mcp": {
      "command": "node",
      "args": ["/path/to/context-x-mcp/src/server/index.js"],
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
}
```

### Basic Usage

```javascript
// Example: Auto-enriched context request
await mcp.request("enrich_context", {
  query: "Analyze current AI trends in browser automation",
  depth: "comprehensive",
  sources: ["web", "academic", "news"]
});
```

## 🏗️ Architecture

### Agent Communication Flow

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   MCP Client    │───▶│ Context[X]MCP    │───▶│  Browser[X]MCP  │
│  (Cursor/CLI)   │    │    Coordinator   │    │     Agent       │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │
                        ┌───────┴───────┐
                        ▼               ▼
                ┌──────────────┐ ┌─────────────┐
                │ Memory Agent │ │Tool Orch.   │
                │   History    │ │   Agent     │
                └──────────────┘ └─────────────┘
                        │               │
                        ▼               ▼
                ┌──────────────┐ ┌─────────────┐
                │Quality Agent │ │Other MCP    │
                │ Assessment   │ │   Tools     │
                └──────────────┘ └─────────────┘
```

### Multi-Agent Roles

1. **Context Coordinator Agent** - Main orchestration and routing
2. **Browser Research Agent** - Web-based data collection
3. **Context Memory Agent** - History and pattern management
4. **Tool Orchestrator Agent** - MCP tool coordination
5. **Quality Assessment Agent** - Result validation and scoring

## 🛠️ Available Tools

### Core Context Tools

- `enrich_context` - Comprehensive context enrichment
- `detect_topic` - Automatic topic classification
- `search_history` - Context history retrieval
- `assess_quality` - Context relevance scoring

### Agent Coordination Tools

- `route_request` - Intelligent agent routing
- `aggregate_results` - Multi-source result combination
- `optimize_performance` - System performance tuning

### Integration Tools

- `browser_research` - Browser[X]MCP integration
- `tool_discovery` - MCP tool capability mapping
- `pattern_analysis` - Usage pattern recognition

## ⚙️ Configuration

### Environment Variables

```bash
# MCP Server Configuration
MCP_PORT=3002
NODE_ENV=development

# Agent Configuration
AGENT_MAX_CONCURRENCY=5
AGENT_TIMEOUT=30000

# Context Settings
CONTEXT_HISTORY_SIZE=1000
CONTEXT_RELEVANCE_THRESHOLD=0.7

# Browser[X]MCP Integration
BROWSER_X_MCP_URL=http://localhost:3001
BROWSER_X_MCP_ENABLED=true

# Vector Storage
VECTOR_DB_PATH=./data/vectors
VECTOR_SIMILARITY_THRESHOLD=0.8

# Quality Assessment
QUALITY_MIN_SCORE=0.6
QUALITY_MAX_SOURCES=10
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Test multi-agent coordination
npm run test:agents

# Test MCP integration
npm run test:integration

# Run mock tests (no external dependencies)
npm run test:mock
```

## 📁 Project Structure

```
context-x-mcp/
├── src/
│   ├── server/           # MCP server implementation
│   ├── agents/           # Multi-agent system
│   ├── core/            # Core functionality
│   └── utils/           # Utilities and helpers
├── test/                # Test suites
├── docs/                # Documentation
├── examples/            # Usage examples
└── assets/             # Assets and resources
```

## 🤝 Integration Examples

### With Browser[X]MCP

```javascript
// Automatic web research with form testing
const result = await contextXMCP.enrichContext({
  query: "Research e-commerce checkout optimization",
  enableBrowserResearch: true,
  testForms: true,
  maxSources: 5
});
```

### Multi-Tool Orchestration

```javascript
// Coordinate multiple MCP tools
const enrichedContext = await contextXMCP.orchestrateTools({
  query: "Analyze competitor pricing strategies",
  tools: ["browser-x-mcp", "data-analysis-mcp", "report-generator-mcp"],
  coordination: "parallel"
});
```

## 🔮 Roadmap

### Phase 1: Foundation ✅
- [x] Project structure setup
- [x] Basic MCP server implementation
- [x] Agent framework foundation

### Phase 2: Core Agents (In Progress)
- [ ] Context Coordinator implementation
- [ ] Browser Research Agent integration
- [ ] Basic topic detection

### Phase 3: Advanced Features
- [ ] Vector-based context memory
- [ ] Quality assessment system
- [ ] Multi-tool orchestration

### Phase 4: Optimization
- [ ] Performance optimization
- [ ] Advanced pattern learning
- [ ] Production deployment

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](docs/CONTRIBUTING.md) for details.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/rnd-pro/context-x-mcp.git
cd context-x-mcp

# Install dependencies
npm install

# Start development server
npm run dev
```

### Submitting Changes

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-context-feature`
3. Commit changes: `git commit -m 'Add amazing context feature'`
4. Push to branch: `git push origin feature/amazing-context-feature`
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 👥 Development Team

**Developed by RND-PRO Team**
- 🌐 Website: [rnd-pro.com](https://rnd-pro.com)
- 💼 Professional development team specializing in innovative AI solutions
- 🤖 Experts in multi-agent systems and context enrichment technologies
- 🚀 Leaders in MCP protocol implementations and intelligent automation

## 🙏 Acknowledgments

- Built on [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)
- Integrates with [Browser[X]MCP](https://github.com/MakerDrive/browser-x-mcp)
- Inspired by multi-agent AI architectures and distributed systems
- Natural language processing powered by advanced NLP libraries

## 📞 Support

- 📧 **Issues**: [GitHub Issues](https://github.com/rnd-pro/context-x-mcp/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/rnd-pro/context-x-mcp/discussions)
- 📖 **Documentation**: [Wiki](https://github.com/rnd-pro/context-x-mcp/wiki)

---

**Made with ❤️ by RND-PRO Team for the AI context enrichment community**
