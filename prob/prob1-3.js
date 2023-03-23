/*
    Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.
*/

const arrowFunction2 = (x, y = 7) => x + y;

const sum = arrowFunction2(10);
console.log(sum);