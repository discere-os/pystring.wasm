/**
 * TypeScript definitions for pystring.wasm
 * Python-compatible string manipulation functions compiled to WebAssembly
 */

export declare class Pystring {
    constructor();
    initialize(): Promise<void>;
    
    // String transformation methods
    capitalize(str: string): string;
    center(str: string, width: number, fillchar?: string): string;
    lower(str: string): string;
    upper(str: string): string;
    swapcase(str: string): string;
    title(str: string): string;
    
    // String trimming methods
    strip(str: string, chars?: string): string;
    lstrip(str: string, chars?: string): string;
    rstrip(str: string, chars?: string): string;
    
    // String padding methods
    ljust(str: string, width: number, fillchar?: string): string;
    rjust(str: string, width: number, fillchar?: string): string;
    zfill(str: string, width: number): string;
    
    // String search methods
    find(str: string, sub: string, start?: number, end?: number): number;
    rfind(str: string, sub: string, start?: number, end?: number): number;
    index(str: string, sub: string, start?: number, end?: number): number;
    count(str: string, sub: string): number;
    
    // String replacement methods
    replace(str: string, old: string, newStr: string, count?: number): string;
    
    // String testing methods
    startswith(str: string, prefix: string): boolean;
    endswith(str: string, suffix: string): boolean;
    isalnum(str: string): boolean;
    isalpha(str: string): boolean;
    isdigit(str: string): boolean;
    islower(str: string): boolean;
    isupper(str: string): boolean;
    isspace(str: string): boolean;
    
    // String splitting and joining
    split(str: string, sep?: string, maxsplit?: number): string[];
    join(separator: string, seq: string[]): string;
}

declare const pystring: Pystring;
export default pystring;