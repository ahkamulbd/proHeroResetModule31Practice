/*
    Write an arrow function where it will do the following:
    a) It will take an array where the array elements will be the 
    name of your friends
    b) Check if the length of each element is even, push elements 
    with even length to a new array and return the result
*/

const friends = ['Rashed', 'Ashraf', 'Towhid', 'Kity', 'Shahnoor', 'Wasim', 'Mehedi'];

const newArray = [];

const arrowFunction3 = element => {
    for (const friend of friends) {

        const nameLength = friend.length;
        if (nameLength % 2 === 0) {
            let elementLength = nameLength;
            newArray.push(elementLength);
        }
        return newArray;
    }
}
const result = arrowFunction3(friends);
console.log(result);