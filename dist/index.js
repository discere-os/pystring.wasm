/**
 * Pystring.wasm Browser Interface
 * Python-compatible string manipulation functions for WebAssembly
 * 
 * Copyright (c) 2025 Superstruct Ltd, New Zealand
 * Licensed under the same license as the underlying Pystring project (BSD-3-Clause)
 */

// Re-export Node.js interface for compatibility
export { default, Pystring } from './node/index.js';

// Browser-specific features can be added here
export const isBrowser = typeof window !== 'undefined';
export const isNode = typeof process !== 'undefined' && process.versions && process.versions.node;