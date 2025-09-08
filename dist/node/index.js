/**
 * Pystring.wasm Node.js Interface
 * Python-compatible string manipulation functions for WebAssembly
 * 
 * Copyright (c) 2025 Superstruct Ltd, New Zealand
 * Licensed under the same license as the underlying Pystring project (BSD-3-Clause)
 */

import initPystringModule from '../../build/pystring.js';

class Pystring {
    constructor() {
        this.wasmModule = null;
        this.initialized = false;
    }

    async initialize() {
        if (this.initialized) return;
        
        this.wasmModule = await initPystringModule();
        this.initialized = true;
    }

    // String transformation methods
    capitalize(str) {
        this._checkInitialized();
        const resultPtr = this.wasmModule._pystring_capitalize(this._allocateString(str));
        const result = this.wasmModule.UTF8ToString(resultPtr);
        this.wasmModule._free(resultPtr);
        return result;
    }

    center(str, width, fillchar = ' ') {
        this._checkInitialized();
        const resultPtr = this.wasmModule._pystring_center(
            this._allocateString(str), 
            width, 
            fillchar.charCodeAt(0)
        );
        const result = this.wasmModule.UTF8ToString(resultPtr);
        this.wasmModule._free(resultPtr);
        return result;
    }

    lower(str) {
        this._checkInitialized();
        const resultPtr = this.wasmModule._pystring_lower(this._allocateString(str));
        const result = this.wasmModule.UTF8ToString(resultPtr);
        this.wasmModule._free(resultPtr);
        return result;
    }

    upper(str) {
        this._checkInitialized();
        const resultPtr = this.wasmModule._pystring_upper(this._allocateString(str));
        const result = this.wasmModule.UTF8ToString(resultPtr);
        this.wasmModule._free(resultPtr);
        return result;
    }

    strip(str, chars = null) {
        this._checkInitialized();
        const charsPtr = chars ? this._allocateString(chars) : 0;
        const resultPtr = this.wasmModule._pystring_strip(this._allocateString(str), charsPtr);
        const result = this.wasmModule.UTF8ToString(resultPtr);
        this.wasmModule._free(resultPtr);
        if (charsPtr) this.wasmModule._free(charsPtr);
        return result;
    }

    // Search methods
    find(str, sub) {
        this._checkInitialized();
        return this.wasmModule._pystring_find(this._allocateString(str), this._allocateString(sub));
    }

    count(str, substr) {
        this._checkInitialized();
        return this.wasmModule._pystring_count(this._allocateString(str), this._allocateString(substr));
    }

    // Boolean test methods
    startswith(str, prefix) {
        this._checkInitialized();
        return Boolean(this.wasmModule._pystring_startswith(this._allocateString(str), this._allocateString(prefix)));
    }

    endswith(str, suffix) {
        this._checkInitialized();
        return Boolean(this.wasmModule._pystring_endswith(this._allocateString(str), this._allocateString(suffix)));
    }

    // String replacement
    replace(str, oldStr, newStr, count = -1) {
        this._checkInitialized();
        const resultPtr = this.wasmModule._pystring_replace(
            this._allocateString(str), 
            this._allocateString(oldStr), 
            this._allocateString(newStr), 
            count
        );
        const result = this.wasmModule.UTF8ToString(resultPtr);
        this.wasmModule._free(resultPtr);
        return result;
    }

    // Helper methods
    _checkInitialized() {
        if (!this.initialized) {
            throw new Error('Pystring module not initialized. Call initialize() first.');
        }
    }

    _allocateString(str) {
        const len = this.wasmModule.lengthBytesUTF8(str) + 1;
        const ptr = this.wasmModule._malloc(len);
        this.wasmModule.stringToUTF8(str, ptr, len);
        return ptr;
    }
}

// Create and export default instance
const pystring = new Pystring();

export default pystring;
export { Pystring };