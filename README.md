# solidity-math

This package extends [bn.js](https://github.com/indutny/bn.js/) to implement 
Solidity integer types and operations. It is useful for replicating public Solidity contract interactions, particularly when developing autonomous agents and DeFi programs.

## Features
- ✅ Compatible with Solidity 0.8.17
- ✅ Comprehensive Solidity integer types
    - Unsigned integers: `uint8`, `uint16`, ..., `uint256`
    - Signed integers: `int8`, `int16`, ..., `int256`
- ✅ Checked & unchecked modes
- ✅ Type safety checks
- ✅ Provides arithmetic, bit, shift & comparison operators


## Installation

## Usage

## Documentation

### Types
*Note 1: `uint` & `int` aliases are not implemented as they are redundant and confusing.*

*Note 2: Fixed point numbers are not implemented because it's not fully supported by Solidity yet as of 0.8.17.*

| Unsigned   | Signed   |
|------------|----------|
| `uint8`    | `int8`   |
| `uint16`   | `int16`  |
| `uint24`   | `int24`  |
| `uint32`   | `int32`  |
| `uint40`   | `int40`  |
| `uint48`   | `int48`  |
| `uint56`   | `int56`  |
| `uint64`   | `int64`  |
| `uint72`   | `int72`  |
| `uint80`   | `int80`  |
| `uint88`   | `int88`  |
| `uint96`   | `int96`  |
| `uint104`  | `int104` |
| `uint112`  | `int112` |
| `uint120`  | `int120` |
| `uint128`  | `int128` |
| `uint136`  | `int136` |
| `uint144`  | `int144` |
| `uint152`  | `int152` |
| `uint160`  | `int160` |
| `uint168`  | `int168` |
| `uint176`  | `int176` |
| `uint184`  | `int184` |
| `uint192`  | `int192` |
| `uint200`  | `int200` |
| `uint208`  | `int208` |
| `uint216`  | `int216` |
| `uint224`  | `int224` |
| `uint232`  | `int232` |
| `uint240`  | `int240` |
| `uint248`  | `int248` |
| `uint256`  | `int256` |

### Arithmetics

### Unchecked mode

To mimic Solidity `unchecked` arithmetic:
```typescript
import { unchecked } from "solidity-math";

unchecked(() => {
    // your calcuations
    ...
});
```

## Example

### Unchecked 

```solidity
uint256 x;
uint256 y;
uint256 z;

unchecked {
    z = x - y;
}
```

```typescript
import { uint256, unchecked } from "solidity-math";

let x = uint256(0);
let y = uint256(0);
let z = uint256(0);

unchecked(() => {
    z = x.sub(y);
});
```
