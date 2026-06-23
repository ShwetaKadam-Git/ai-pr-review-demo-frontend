import assert from 'node:assert';
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
globalThis.document = dom.window.document;
globalThis.window = dom.window;

const { policyBadge } = await import('../src/components/policy-badge.js');

const badge = policyBadge('default');
assert.strictEqual(badge.textContent, 'default');
assert.strictEqual(badge.className, 'policy-badge');

console.log('All tests passed.');