/**
 * WASM Bindings for Pystring Library
 * Python-compatible string manipulation functions for WebAssembly
 * 
 * Copyright (c) 2025 Superstruct Ltd, New Zealand
 * Licensed under the same license as the underlying Pystring project (BSD-3-Clause)
 */

#include "../pystring.h"
#include <emscripten/emscripten.h>
#include <emscripten/bind.h>
#include <string>
#include <vector>

using namespace emscripten;
using namespace pystring;
using std::string;
using std::vector;

// WASM-exported functions for pystring operations

EMSCRIPTEN_KEEPALIVE
extern "C" {
    // String manipulation functions
    char* pystring_capitalize(const char* str) {
        string result = capitalize(string(str));
        char* output = (char*)malloc(result.length() + 1);
        strcpy(output, result.c_str());
        return output;
    }
    
    char* pystring_center(const char* str, int width, char fillchar) {
        string result = center(string(str), width);
        char* output = (char*)malloc(result.length() + 1);
        strcpy(output, result.c_str());
        return output;
    }
    
    int pystring_count(const char* str, const char* substr) {
        return count(string(str), string(substr));
    }
    
    int pystring_endswith(const char* str, const char* suffix) {
        return endswith(string(str), string(suffix)) ? 1 : 0;
    }
    
    int pystring_find(const char* str, const char* sub) {
        return find(string(str), string(sub));
    }
    
    int pystring_index(const char* str, const char* sub) {
        return pystring::index(string(str), string(sub));
    }
    
    int pystring_isalnum(const char* str) {
        return isalnum(string(str)) ? 1 : 0;
    }
    
    int pystring_isalpha(const char* str) {
        return isalpha(string(str)) ? 1 : 0;
    }
    
    int pystring_isdigit(const char* str) {
        return isdigit(string(str)) ? 1 : 0;
    }
    
    int pystring_islower(const char* str) {
        return islower(string(str)) ? 1 : 0;
    }
    
    int pystring_isspace(const char* str) {
        return isspace(string(str)) ? 1 : 0;
    }
    
    int pystring_isupper(const char* str) {
        return isupper(string(str)) ? 1 : 0;
    }
    
    char* pystring_join(const char* sep, char** seq, int count) {
        vector<string> v;
        for (int i = 0; i < count; i++) {
            v.push_back(string(seq[i]));
        }
        string result = join(string(sep), v);
        char* output = (char*)malloc(result.length() + 1);
        strcpy(output, result.c_str());
        return output;
    }
    
    char* pystring_ljust(const char* str, int width, char fillchar) {
        string result = ljust(string(str), width);
        char* output = (char*)malloc(result.length() + 1);
        strcpy(output, result.c_str());
        return output;
    }
    
    char* pystring_lower(const char* str) {
        string result = lower(string(str));
        char* output = (char*)malloc(result.length() + 1);
        strcpy(output, result.c_str());
        return output;
    }
    
    char* pystring_lstrip(const char* str, const char* chars) {
        string result = chars ? lstrip(string(str), string(chars)) : lstrip(string(str));
        char* output = (char*)malloc(result.length() + 1);
        strcpy(output, result.c_str());
        return output;
    }
    
    char* pystring_replace(const char* str, const char* oldstr, const char* newstr, int count) {
        string result = replace(string(str), string(oldstr), string(newstr), count);
        char* output = (char*)malloc(result.length() + 1);
        strcpy(output, result.c_str());
        return output;
    }
    
    int pystring_rfind(const char* str, const char* sub) {
        return rfind(string(str), string(sub));
    }
    
    char* pystring_rjust(const char* str, int width, char fillchar) {
        string result = rjust(string(str), width);
        char* output = (char*)malloc(result.length() + 1);
        strcpy(output, result.c_str());
        return output;
    }
    
    char* pystring_rstrip(const char* str, const char* chars) {
        string result = chars ? rstrip(string(str), string(chars)) : rstrip(string(str));
        char* output = (char*)malloc(result.length() + 1);
        strcpy(output, result.c_str());
        return output;
    }
    
    // Split function - returns number of parts, fills array
    int pystring_split(const char* str, const char* sep, char*** result_array) {
        vector<string> parts;
        if (sep) {
            split(string(str), parts, string(sep));
        } else {
            split(string(str), parts);
        }
        
        *result_array = (char**)malloc(parts.size() * sizeof(char*));
        for (size_t i = 0; i < parts.size(); i++) {
            (*result_array)[i] = (char*)malloc(parts[i].length() + 1);
            strcpy((*result_array)[i], parts[i].c_str());
        }
        return parts.size();
    }
    
    int pystring_startswith(const char* str, const char* prefix) {
        return startswith(string(str), string(prefix)) ? 1 : 0;
    }
    
    char* pystring_strip(const char* str, const char* chars) {
        string result = chars ? strip(string(str), string(chars)) : strip(string(str));
        char* output = (char*)malloc(result.length() + 1);
        strcpy(output, result.c_str());
        return output;
    }
    
    char* pystring_swapcase(const char* str) {
        string result = swapcase(string(str));
        char* output = (char*)malloc(result.length() + 1);
        strcpy(output, result.c_str());
        return output;
    }
    
    char* pystring_title(const char* str) {
        string result = title(string(str));
        char* output = (char*)malloc(result.length() + 1);
        strcpy(output, result.c_str());
        return output;
    }
    
    char* pystring_upper(const char* str) {
        string result = upper(string(str));
        char* output = (char*)malloc(result.length() + 1);
        strcpy(output, result.c_str());
        return output;
    }
    
    char* pystring_zfill(const char* str, int width) {
        string result = zfill(string(str), width);
        char* output = (char*)malloc(result.length() + 1);
        strcpy(output, result.c_str());
        return output;
    }
}