const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    color: 'silver',
    phone: '01700 000000',
    price: 4000
}
const phone = fish.phone;
const color = fish.color;
const price = fish.price;

// console.log(phone);
// console.log(color);
// console.log(price);

const { age, name } = { name: 'Almas', age: 56, profession: 'actor' };
//console.log(age);

const { address } = fish;
//console.log(address);

// Array Destructuring:

const [first, another] = [88, 456, 44, 99,];
//console.log(first, another);

const cricketers = ['Shakib', 'Liton', 'Mirag'];
const [king, tiger, prince] = cricketers;

//console.log(tiger);

function getName() {
    return ['Alim', 'Halim'];
}
const [baba, chacha] = getName();
console.log(chacha, baba);
