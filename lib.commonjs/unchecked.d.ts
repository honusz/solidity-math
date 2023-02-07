/**
 * Usage:
 *
 * ``` code
 * import { unchecked } from "solidity-math";
 *
 * unchecked(() => {
 *   // perform your unchecked solidity math
 * })
 * ```
 */
/** @description Performs the callback function under unchecked mode */
export declare function unchecked(callback: () => void): void;
/** @description returns true if unchecked mode is on */
export declare function isUnchecked(): boolean;
