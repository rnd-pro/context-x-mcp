/**
 * Configuration Manager for Context[X]MCP
 */

export class ConfigManager {
  constructor() {
    this.config = new Map();
    this.loadConfig();
  }

  loadConfig() {
    // Load environment variables with defaults
    const defaults = {
      MCP_PORT: '3002',
      NODE_ENV: 'development',
      DEBUG: 'false',
      AGENT_MAX_CONCURRENCY: '5',
      AGENT_TIMEOUT: '30000',
      CONTEXT_HISTORY_SIZE: '1000',
      CONTEXT_RELEVANCE_THRESHOLD: '0.7',
      BROWSER_X_MCP_URL: 'http://localhost:3001',
      BROWSER_X_MCP_ENABLED: 'true',
      VECTOR_SIMILARITY_THRESHOLD: '0.8',
      QUALITY_MIN_SCORE: '0.6',
      LOG_LEVEL: 'info',
    };

    // Load from environment or use defaults
    for (const [key, defaultValue] of Object.entries(defaults)) {
      this.config.set(key, process.env[key] || defaultValue);
    }
  }

  get(key, defaultValue = null) {
    return this.config.get(key) || defaultValue;
  }

  getBoolean(key, defaultValue = false) {
    const value = this.get(key);
    return value ? value.toLowerCase() === 'true' : defaultValue;
  }

  getNumber(key, defaultValue = 0) {
    const value = this.get(key);
    return value ? parseInt(value, 10) : defaultValue;
  }

  getFloat(key, defaultValue = 0.0) {
    const value = this.get(key);
    return value ? parseFloat(value) : defaultValue;
  }

  set(key, value) {
    this.config.set(key, value);
  }

  getAll() {
    return Object.fromEntries(this.config);
  }
} 