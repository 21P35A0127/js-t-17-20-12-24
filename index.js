// 1. Basic Callback Execution
//    Write a function called 
//    processNumber that accepts 
//    a number and a callback function. 
//    The processNumber function should 
//    double the number and pass the result 
//    to the callback function.

let processNumber = (number, callback) => {
    let result = number * 5;
    callback(result);
};
processNumber(5, result => console.log(`Doubled number: ${result}`));





















// 2. Callback with Array Iteration
//  Write a function called forEachElement 
//  that takes an array and a callback 
//  function. The function should iterate over 
//  the array and execute the callback function 
//  for each element, passing the element as 
//  an argument.

// let forEachElement = (array, callback) => {
//     array.forEach(element => callback(element));
// };
// forEachElement([1, 2, 3], element => console.log(`Element: ${element}`));

// 3. Simple Delayed Callback
//  Write a function sayHello that accepts a 
//  name and a callback function. Use setTimeout 
//  to wait for 1 second and then call the 
//  callback function, passing the message 
//  "Hello, [name]!" (replace [name] with the 
//  provided name).

// let sayHello = (name, callback) => {
//     setTimeout(() => {
//         callback(`Hey, ${name}!`);
//     }, 1000);
// };
// sayHello("Teddy", message => console.log(message));

// 4. Callback on Condition
//  Write a function checkEven that accepts a 
//  number and two callback functions. If the 
//  number is even, call the first callback 
//  with the number. If the number is odd, 
//  call the second callback with the number.

// let checkEven = (number, evenCallback, oddCallback) => {
//     if (number % 2 === 0) {
//         evenCallback(number);
//     } else {
//         oddCallback(number);
//     }
// };
// checkEven(2, 
//     number => console.log(`${number} is even`), 
//     number => console.log(`${number} is odd`)
// );
// checkEven(5, 
//     number => console.log(`${number} is even`), 
//     number => console.log(`${number} is odd`));

// 5. Sequential Callbacks
//  Write a function performTasks that accepts 
//  a number and two callback functions. First,
//  add 5 to the number using the first callback, 
//  and then multiply the result by 2 using the
//  second callback. Log the final result to the 
//  console.

// let performTasks = (number, callback1, callback2) => {
//     const result1 = callback1(number);
//     const result2 = callback2(result1);
//     console.log(`Final result: ${result2}`);
// };
// performTasks(20, 
//     num => num + 5, 
//     num => num * 2);





