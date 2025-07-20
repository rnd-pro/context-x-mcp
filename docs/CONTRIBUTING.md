# Contributing to Context[X]MCP

Thank you for your interest in contributing to Context[X]MCP! This document provides guidelines and information for contributors.

## 🌟 Ways to Contribute

- 🐛 **Bug Reports**: Report issues and bugs
- 💡 **Feature Requests**: Suggest new features and improvements
- 📝 **Documentation**: Improve documentation and examples
- 🔧 **Code Contributions**: Submit bug fixes and new features
- 🧪 **Testing**: Add tests and improve test coverage
- 🎨 **UI/UX**: Improve user experience and interfaces

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18.0.0
- npm ≥ 8.0.0
- Git
- Basic understanding of MCP (Model Context Protocol)
- Familiarity with multi-agent systems (helpful)

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/context-x-mcp.git
   cd context-x-mcp
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Run Tests**
   ```bash
   npm test
   ```

## 📋 Development Workflow

### Branch Naming Convention

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `test/description` - Test improvements
- `refactor/description` - Code refactoring

### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding/updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(coordinator): add topic detection algorithm
fix(memory): resolve vector similarity calculation bug
docs(agents): update architecture documentation
```

## 🏗️ Project Structure

### Agent Development

When contributing to agent functionality:

```
src/agents/
├── coordinator/     # Main orchestration agent
├── browser/        # Browser research agent
├── memory/         # Context memory agent
├── orchestrator/   # Tool orchestrator agent
└── quality/        # Quality assessment agent
```

### Core Components

```
src/core/
├── agent-base.js      # Base agent class
├── communication.js   # Inter-agent communication
└── context-manager.js # Context management
```

### Utilities

```
src/utils/
├── topic-detector.js  # Topic detection utilities
├── vector-store.js    # Vector storage utilities
└── mcp-bridge.js      # MCP integration bridge
```

## 🧪 Testing Guidelines

### Test Structure

```
test/
├── unit/           # Unit tests for individual components
├── integration/    # Integration tests for agent interactions
└── e2e/           # End-to-end tests for complete workflows
```

### Writing Tests

1. **Unit Tests**: Test individual functions and classes
2. **Integration Tests**: Test agent interactions and MCP communications
3. **E2E Tests**: Test complete context enrichment workflows

### Test Commands

```bash
npm test                    # Run all tests
npm run test:unit          # Run unit tests only
npm run test:integration   # Run integration tests only
npm run test:e2e          # Run end-to-end tests only
npm run test:watch        # Run tests in watch mode
```

## 📝 Documentation Standards

### Code Documentation

- Use JSDoc for function and class documentation
- Include parameter types and descriptions
- Provide usage examples for complex functions

```javascript
/**
 * Enriches context using multi-agent system
 * @param {Object} args - Enrichment arguments
 * @param {string} args.query - The query to enrich
 * @param {string} args.depth - Enrichment depth level
 * @param {Array<string>} args.sources - Data sources to use
 * @returns {Promise<Object>} Enriched context response
 * @example
 * const result = await coordinator.enrichContext({
 *   query: "AI trends in 2025",
 *   depth: "comprehensive",
 *   sources: ["web", "memory"]
 * });
 */
async enrichContext(args) {
  // Implementation
}
```

### README Updates

- Update README.md for new features
- Include usage examples
- Update configuration documentation

## 🔍 Code Quality Standards

### ESLint Configuration

We use ESLint for code quality. Run before submitting:

```bash
npm run lint        # Check for issues
npm run lint:fix    # Auto-fix issues
```

### Code Style Guidelines

- Use descriptive variable names
- Keep functions focused and small
- Use async/await over Promises
- Handle errors appropriately
- Add logging for debugging

### Performance Considerations

- Optimize agent coordination for parallel execution
- Use efficient data structures for context storage
- Implement proper error handling and recovery
- Monitor memory usage in long-running processes

## 🚀 Submitting Contributions

### Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-context-feature
   ```

2. **Make Changes**
   - Write code following style guidelines
   - Add tests for new functionality
   - Update documentation

3. **Test Changes**
   ```bash
   npm test
   npm run lint
   ```

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat(coordinator): add amazing context feature"
   ```

5. **Push to Fork**
   ```bash
   git push origin feature/amazing-context-feature
   ```

6. **Create Pull Request**
   - Use descriptive title and description
   - Reference related issues
   - Include testing instructions

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added/updated
```

## 🐛 Reporting Issues

### Bug Reports

Include:
- Environment details (Node.js version, OS)
- Steps to reproduce
- Expected vs actual behavior
- Error messages and logs
- Configuration details

### Feature Requests

Include:
- Use case description
- Proposed solution
- Alternative approaches considered
- Impact on existing functionality

## 💬 Community Guidelines

### Communication

- Be respectful and constructive
- Use clear and concise language
- Provide context and examples
- Ask questions when unclear

### Code of Conduct

- Follow GitHub's Community Guidelines
- Maintain professional interactions
- Support fellow contributors
- Focus on constructive feedback

## 📚 Resources

### Learning Resources

- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)
- [Multi-Agent Systems Concepts](https://en.wikipedia.org/wiki/Multi-agent_system)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

### Related Projects

- [Browser[X]MCP](https://github.com/MakerDrive/browser-x-mcp)
- [MCP SDK](https://github.com/modelcontextprotocol/sdk)

## 🙏 Recognition

Contributors will be recognized in:
- Project README.md
- Release notes
- Project documentation

Thank you for contributing to Context[X]MCP! 🚀

---

**Developed by RND-PRO Team** | [rnd-pro.com](https://rnd-pro.com) 