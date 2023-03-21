const add = (first, second) => first + second;

const getFullName = (first, last) => first + ' ' + last;
const multiply = (a, b) => a * b;
const addAll = (a, b, c, d, e) => a + b + c + d + e;
const getPie = () => 3.14
const doubleIt = (num) => num * 2;

// Multi Line Arrow function:

const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
}
const result = doMath(1, 2, 3);
console.log(result);
