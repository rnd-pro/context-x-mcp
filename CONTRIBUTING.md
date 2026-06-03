# Contributing

`context-x-mcp` is an MCP server for context enrichment, topic detection, tool routing, context memory, and multi-agent orchestration.

Keep changes close to the owning area:

- MCP server entry point and request handling: `src/server/`
- Agent coordination and routing: `src/agents/`
- Configuration and logging: `src/server/config/` and `src/utils/`
- Public usage docs: `README.md`, `docs/`, and `examples/`

Before opening a change, run:

```sh
npm test
npm run lint
```

Do not commit local configs, context memory dumps, vector stores, generated logs, package tarballs, or temporary audits.
