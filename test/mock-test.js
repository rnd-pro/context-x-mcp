import assert from 'node:assert/strict';
import { ContextXMCPServer } from '../src/server/index.js';

export async function runMockTest() {
  const server = new ContextXMCPServer();

  assert.equal(typeof server.start, 'function');
  assert.equal(typeof server.shutdown, 'function');
  assert.equal(server.server.constructor.name, 'Server');
  assert.ok(server.coordinator);

  await server.shutdown();

  return { passed: 4, failed: 0 };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  runMockTest()
    .then((result) => {
      console.log(`Context[X]MCP mock tests passed: ${result.passed}`);
    })
    .catch((error) => {
      console.error(error);
      process.exitCode = 1;
    });
}
