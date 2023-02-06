import BN from "bn.js";
export declare const BN0: BN;
export declare const BN1: BN;
export declare const BN2: BN;
export declare const BN128: BN;
export declare const BN256: BN;
interface bitValues {
    bn: BN;
    powerOf2: BN;
    uintmax: BN;
    intmax: BN;
    intmin: BN;
}
export declare const bit8: bitValues;
export declare const bit16: bitValues;
export declare const bit24: bitValues;
export declare const bit32: bitValues;
export declare const bit40: bitValues;
export declare const bit48: bitValues;
export declare const bit56: bitValues;
export declare const bit64: bitValues;
export declare const bit72: bitValues;
export declare const bit80: bitValues;
export declare const bit88: bitValues;
export declare const bit96: bitValues;
export declare const bit104: bitValues;
export declare const bit112: bitValues;
export declare const bit120: bitValues;
export declare const bit128: bitValues;
export declare const bit136: bitValues;
export declare const bit144: bitValues;
export declare const bit152: bitValues;
export declare const bit160: bitValues;
export declare const bit168: bitValues;
export declare const bit176: bitValues;
export declare const bit184: bitValues;
export declare const bit192: bitValues;
export declare const bit200: bitValues;
export declare const bit208: bitValues;
export declare const bit216: bitValues;
export declare const bit224: bitValues;
export declare const bit232: bitValues;
export declare const bit240: bitValues;
export declare const bit248: bitValues;
export declare const bit256: bitValues;
export declare function _getBitValues(bitlen: number): bitValues;
export {};
