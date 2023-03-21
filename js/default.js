function add(first = 12, second = 10) {
    //console.log(first, second);
    if (second === undefined) {
        second = 0;
    }
    const total = first + second;

    return total;
}
const result = add();
console.log(result);