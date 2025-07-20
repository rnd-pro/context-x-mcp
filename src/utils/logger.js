/**
 * Logger utility for Context[X]MCP
 */

export class Logger {
  constructor(level = 'info') {
    this.level = level;
    this.levels = {
      error: 0,
      warn: 1,
      info: 2,
      debug: 3,
    };
  }

  shouldLog(level) {
    return this.levels[level] <= this.levels[this.level];
  }

  error(...args) {
    if (this.shouldLog('error')) {
      console.error(`[ERROR] ${new Date().toISOString()}`, ...args);
    }
  }

  warn(...args) {
    if (this.shouldLog('warn')) {
      console.warn(`[WARN] ${new Date().toISOString()}`, ...args);
    }
  }

  info(...args) {
    if (this.shouldLog('info')) {
      console.log(`[INFO] ${new Date().toISOString()}`, ...args);
    }
  }

  debug(...args) {
    if (this.shouldLog('debug')) {
      console.log(`[DEBUG] ${new Date().toISOString()}`, ...args);
    }
  }
} 