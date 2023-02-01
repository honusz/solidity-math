# solidity-math

This package extends [bn.js](https://github.com/indutny/bn.js/) to implement 
Solidity integer types and operations. It is useful for replicating public Solidity contract interactions, particularly when developing autonomous agents and DeFi programs.

## Features
- ✅ Compatible with Solidity 0.8.17
- ✅ Comprehensive Solidity integer types & operators
    - Unsigned integers: `uint8`, `uint16`, ..., `uint256`
    - Signed integers: `int8`, `int16`, ..., `int256`
- ✅ Inline assembly functions: `addmod()` & `mulmod()`
- ✅ Checked & unchecked modes
- ✅ Type safety checks
- Type casting (coming soon)
- Test coverage (coming soon)

## Table of Contents
* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [Documentation](#documentation)
    + [Types](#types)
    + [Operations](#operations)
    + [Number Creation](#number-creation)
    + [Maximum and minimum](#maximum-and-minimum)
    + [Unchecked Mode](#unchecked-mode)
* [Example](#example)
    + [Unchecked Arithmetic](#unchecked-arithmetic)
    + [Muldiv](#muldiv)

## Installation

## Usage
```typescript
import { Uint256, uint256, unchecked } from "solidity-math";

let a = new Uint256(10); // create new Uint256 number
let b = uint256(10); // same as above, alias function

console.log(a.eq(b)); // true
console.log(a.add(b)); // Uint256(bn=20)
unchecked(() => {
    console.log(a.sub(b).sub(b)); // Uint256(bn=115792089237316195423570985008687907853269984665640564039457584007913129639926)
});
console.log(a.sub(b).sub(b)); // RangeError: Value under/overflow outside of unchecked mode: Uint256(bn=-10) 
```

## Documentation

### Types
*Note 1: `uint` & `int` aliases are not implemented as they are redundant and confusing.*

*Note 2: Fixed point numbers are not implemented because it's not fully supported by Solidity yet as of 0.8.17.*

| Unsigned   | Signed   |
|------------|----------|
| `Uint8`    | `Int8`   |
| `Uint16`   | `Int16`  |
| `Uint24`   | `Int24`  |
| `Uint32`   | `Int32`  |
| `Uint40`   | `Int40`  |
| `Uint48`   | `Int48`  |
| `Uint56`   | `Int56`  |
| `Uint64`   | `Int64`  |
| `Uint72`   | `Int72`  |
| `Uint80`   | `Int80`  |
| `Uint88`   | `Int88`  |
| `Uint96`   | `Int96`  |
| `Uint104`  | `Int104` |
| `Uint112`  | `Int112` |
| `Uint120`  | `Int120` |
| `Uint128`  | `Int128` |
| `Uint136`  | `Int136` |
| `Uint144`  | `Int144` |
| `Uint152`  | `Int152` |
| `Uint160`  | `Int160` |
| `Uint168`  | `Int168` |
| `Uint176`  | `Int176` |
| `Uint184`  | `Int184` |
| `Uint192`  | `Int192` |
| `Uint200`  | `Int200` |
| `Uint208`  | `Int208` |
| `Uint216`  | `Int216` |
| `Uint224`  | `Int224` |
| `Uint232`  | `Int232` |
| `Uint240`  | `Int240` |
| `Uint248`  | `Int248` |
| `uint256`  | `int256` |

### Operations
Non unary operations must be performed on two Numbers of the same type, e.g.: 
```typescript
uint256(1).add(uint256(2)); // valid
uint256(1).add(uint128(2)); // invalid, error raised
```

Some operations also have an in-place version, which have an `i` prefix 
before the method name, e.g.:
```typescript
// these two lines are equivalent
a.iadd(b); // solidity: a += b
a = a.add(b); // solidity: a = a + b
```

| Method           | Description              | Solidity Equivalent | In-place version |
|------------------|--------------------------|---------------------|------------------|
| `a.add(b)`       | Add                      | `a + b`             | ✅              | 
| `a.sub(b)`       | Subtract                 | `a - b`             | ✅              | 
| `a.mul(b)`       | Multiply                 | `a * b`             | ✅              | 
| `a.div(b)`       | Divide                   | `a / b`             | ✅              | 
| `a.mod(b)`       | Modulo                   | `a % b`             | ✅              | 
| `a.pow(b)`       | Exponentiation           | `a ** b`            |                 | 
| `a.neg()`        | Negation, for `Int` only     | `-a`                |                 |
| `a.addmod(b, m)` | Add then modulo          | `assembly { addmod(a, b, m) }` |       |
| `a.mulmod(b, m)` | Multiply then modulo     | `assembly { mulmod(a, b, m) }` |       |
| `a.shln(b)`      | Shift left               | `a << b`            | ✅              | 
| `a.shrn(b)`      | Shift right              | `a >> b`            | ✅              | 
| `a.and(b)`       | Bitwise and              | `a & b`             | ✅              | 
| `a.or(b)`        | Bitwise or               | `a \| b`            | ✅              | 
| `a.xor(b)`       | Bitwise xor              | `a ^ b`             | ✅              | 
| `a.not()`        | Bitwise negation         | `~a`                |                 | 
| `a.gt(b)`        | Greater than             | `a > b`             |                 | 
| `a.lt(b)`        | Less than                | `a < b`             |                 | 
| `a.gte(b)`       | Greater than or equal to | `a >= b`            |                 | 
| `a.lte(b)`       | Less than or equal to    | `a <= b`            |                 | 
| `a.eq(b)`        | Equal to                 | `a == b`            |                 | 
| `a.neq(b)`       | Not equal to             | `a != b`            |                 | 


### Number Creation
You can use the class constructor `new Uint256()` or the alias function `uint256()`, which are equivalent.
The same also applies to signed integer classes.

```typescript
import { Uint256, uint256 } from "solidity-math";

// these two are equivalent
let a = new Uint256(100);
let b = uint256(100);

a.eq(b); // true
```

### Maximum and Minimum
For any type, e.g. `Uint256`, you can use `Uint256.min()` and `Uint256.max()` to access the minimum and maximum value representable by the type.

```typescript
import { Uint256 } from "solidity-math";

let a = Uint256.max();
console.log(a); // Uint256(bn=115792089237316195423570985008687907853269984665640564039457584007913129639935)
```

### Unchecked Mode
To mimic Solidity `unchecked` arithmetic:
```typescript
import { unchecked } from "solidity-math";

unchecked(() => {
    // your calcuations
    ...
});
```

For the purpose of this package, you should also perform Solidity inline assembly `assembly { ... }` 
in `unchecked` mode.

### Casting
To be implemented.

## Example

### Unchecked Arithmetic
```solidity
// Solidity code
uint256 x;
uint256 y;
uint256 z;

unchecked {
    z = x - y;
}
```

```typescript
// Typescript equivalent
import { uint256, unchecked } from "solidity-math";

let x = uint256(0);
let y = uint256(0);
let z = uint256(0);

unchecked(() => {
    z = x.sub(y);
});
```

### Muldiv
[muldiv](https://xn--2-umb.com/21/muldiv/index.html) is an algorithm that calculates `floor(a * b / denominator)`.
It is also included in [Uniswap V3 FullMath.sol](https://github.com/Uniswap/v3-core/blob/412d9b236a1e75a98568d49b1aeb21e3a1430544/contracts/libraries/FullMath.sol#L8).

Below is the Typescript equivalent function. Note that the original code is in Solidity <0.8.0, 
which allows `-uint256(denominator)`. To use this package, 
we need to perform `uint256(0).sub(denominator)` in unchecked mode.

```typescript
import { unchecked, uint256, Uint256 } from "./build/src/index";

function muldiv(a: Uint256, b: Uint256, denominator: Uint256) {
    if (!denominator.gt(uint256(0))) {
        throw new Error;
    }

    let mm = a.mulmod(b, Uint256.max());
    let prod0 = a.mul(b);
    let prod1 = mm.sub(prod0).sub(uint256(+(a.lt(b))));

    if (prod1.eq(uint256(0))) {
        return prod0.div(denominator);
    }

    if (!prod1.lt(denominator)) {
        throw new Error;
    }

    let remainder = a.mulmod(b, denominator);
    prod1 = prod1.sub(uint256(+(remainder.gt(prod0))));
    prod0 = prod0.sub(remainder);

    let twos = uint256(0);
    // -x for uint256 is disabled since 0.8.0
    // so we need unchecked mode
    unchecked(() => {
        twos = uint256(0).sub(denominator).and(denominator);
        denominator = denominator.div(twos);

        prod0 = prod0.div(twos);
        twos = uint256(0).sub(twos).div(twos).add(uint256(1));
    });

    prod0.ior(prod1.mul(twos));

    let inv = denominator.xor(uint256(2)).mul(uint256(3));
    inv.imul(uint256(2).sub(denominator.mul(inv)));
    inv.imul(uint256(2).sub(denominator.mul(inv)));
    inv.imul(uint256(2).sub(denominator.mul(inv)));
    inv.imul(uint256(2).sub(denominator.mul(inv)));
    inv.imul(uint256(2).sub(denominator.mul(inv)));
    inv.imul(uint256(2).sub(denominator.mul(inv)));

    let result = prod0.mul(inv);
    return result;
}

let a = uint256(14718); // create new Uint256 number
let b = uint256(13812); // same as above, alias function
let denominator = uint256(151231); // same as above, alias function

console.log(muldiv(a, b, denominator)); // Uint256(bn=1344)
```