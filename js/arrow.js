function add(first, second) {
    const total = first + second;
    return total;
}
const result = add(10, 20);
//console.log(result);

const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}
const add2 = function (first, second) {
    const total = first + second;
    return total;
}

function add4(first, second) {
    return first + second;
}

const add5 = function (first, second) {
    return first + second;
}

const add6 = (first, second) => first + second;

const result6 = add5(10, 20);
console.log(result6);


