// 1. Extract the first and third elements from the array numbers = [5, 10, 15, 20] using destructuring.

// var arr = [5, 10, 15, 20]
// var [a,,c] = arr
// console.log(a,c);

// 2. Swap the values of a and b using array destructuring.

// let a = 10;
// let b = 20;

// console.log("Before Swap: a=", a, "b=", b);
// [a, b] = [b, a]; //swap

// console.log("After Swap: a =", a, "b=", b);

// 3. Destructure the object {name: "John", age: 25, city: "New York"} to extract name and city into separate variables.

// const obj = { name: "John", age: 25, city: "New York" };

//  const {name,city} = obj

//  console.log(name,city);

// 4. Using destructuring, assign a default value of "Guest" to user if it is not present in the object {id: 101}.

// var obj = { id: 101 };

// var { id, user = "Guest" } = obj;

// console.log(id, user);
// console.log(user);

// 5. Extract first and last from the nested object {person: {first: "Alice", last: "Johnson"}} using destructuring.

// var obj = { person: { first: "Alice", last: "Johnson" } };

// var {
//   person: { first, last },
// } = obj;
// console.log(first, last);

// 6. Use array destructuring to ignore the second element of [100, 200, 300] and store the rest in another variable.

// var arr = [100, 200, 300];

// var [a, , c] = arr;
// console.log(a, c);

// 7. Destructure the array [1, 2, 3, 4] inside a function parameter and return the sum of all elements.

//m -1
// let arr = [1, 2, 3, 4]
// function sumAllElem([a,b,c,d]){

// return a+b+c+d
// }
// console.log(sumAllElem(arr));

//m -2
// function sumAllElem([a,b,c,d]){

// return a+b+c+d
// }
// console.log(sumAllElem([1, 2, 3, 4]));

// 8. Destructure an object {name: "David", age: 30, job: "Developer"} and rename job to profession.

// var obj = { name: "David", age: 30, job: "Developer" };

// var { job: profession } = obj;

// console.log(profession);

// 9. Destructure the following nested array [[1, 2], [3, 4]] to extract 1 and 4.

// let nestedArr = [
//   [1, 2],
//   [3, 4],
// ];

// let [[a], [, d]] = nestedArr;

// console.log(a, d);

// 10. Destructure an array [10, 20] and swap the values inside an if condition only if the first value is smaller than the second.

// let arr = [10,20]

// let [a,b] = arr;

// if(a<b){
//     [a,b] = [b,a]
// }
// console.log('After swapping a=', a, 'b=', b);

// 11. Destructure the object {user: {id: 5, info: {name: "Sam", city: "Paris"}}} and extract name and city.

// var obj = { user: { id: 5, info: { name: "Sam", city: "Paris" } } };

// // var {user: { info: {name,city} }} = obj
// var { name, city } = obj.user.info;

// console.log(name, city);

// 12. Given an array [10, [20, 30], 40], destructure it to extract 10, 30, and 40 into separate variables.

// var arr = [10, [20, 30], 40];

// var [a, [, c], d] = arr;
// console.log(a, c, d);

// 13. Using array destructuring, loop over an array [[1, "one"], [2, "two"], [3, "three"]] and print each key-value pair.

// var arr = [
//   [1, "one"],
//   [2, "two"],
//   [3, "three"],
// ];

// for (const [key, value] of arr) {
//   console.log(key, value);
// }

// 14. Write a function that takes an object {a: 5, b: 10, c: 15} as an argument and returns the sum of a and c using destructuring.

// function takeObj({a,c}){
// return a+c;
// }
// console.log(takeObj({a: 5, b: 10, c: 15}));

// 15. Destructure a nested object {data: {user: {id: 3, details: {age: 25, country: "India"}}}} and extract id and country.

// var obj = {data: {user: {id: 3, details: {age: 25, country: "India"}}}}

// var {id} = obj.data.user
// var {country} = obj.data.user.details
// console.log(id,country);

// 16. Given const obj = {a: [1, 2, {b: 3}], c: {d: 4, e: [5, 6]}}, destructure to extract 3 and 6.

// const obj = { a: [1, 2, { b: 3 }], c: { d: 4, e: [5, 6] } };

// const {a: [, , { b }],c: {e: [, secondB],},
// } = obj;

// console.log(b, secondB);

// 17. Destructure an object {items: [{price: 100}, {price: 200}], discount: 0.1} to calculate the total price after discount.

//METHOD -1
// const obj = {
//     items: [{ price: 100 }, { price: 200 }],
//     discount: 0.1
//   };

// const { items, discount } = obj;

// // Calculate total price of items
// //We use reduce() method to sum up all prices inside the items array.
// const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

// // Apply discount
// //Discounted Price=Total Price−(Total Price×Discount)
// const totalPriceAfterDiscount = totalPrice - (totalPrice * discount);

// console.log(totalPriceAfterDiscount);

//METHOD -2

// const obj = {
//     items: [{ price: 100 }, { price: 200 }],
//     discount: 0.1
//   };

//   const { items, discount } = obj;

// //   console.log(items,discount);

//   const totalPriceAfterDiscount = items
//     .map(item => item.price)  // Extract prices from items array
//     .reduce((sum, price) => sum + price, 0)  // Sum up all the prices
//   * (1 - discount);  // Apply discount

//   console.log(totalPriceAfterDiscount); // Output: 270

// 18. Use destructuring in function parameters to pass {name: "Alice", scores: [80, 90, 100]} and return the average score.

// function getAverageScore({ scores: [n1, n2, n3] }) {
//   return (n1 + n2 + n3) / 3;
// }

// const student = { name: "ALice", scores: [80, 90, 100] };

// console.log(getAverageScore(student));

// 19. Given const users = [{id: 1, name: "John"}, {id: 2, name: "Jane"}], use destructuring inside map() to extract id and name.


// m -1 
// const users = [{id: 1, name: "John"}, {id: 2, name: "Jane"}]

// users.map(({ id, name }) => console.log(`ID: ${id}, Name: ${name}`));


// m -2
// const users = [{id: 1, name: "John"}, {id: 2, name: "Jane"}]

// const userDetails = users.map(({ id, name }) => ({ id, name }));

// console.log(userDetails);



// 20. Destructure an array [["x", 1], ["y", 2], ["z", 3]] using forEach() and log "Key: x, Value: 1" format for each pair.


//print only first elem
// var arr = [["x", 1], ["y", 2], ["z", 3]]

// var [[key,one]] = arr
// console.log(key,one);



//print all elem
// var arr = [["x", 1], ["y", 2], ["z", 3]];

// arr.forEach(([key, value]) => {
//   console.log(`Key: ${key}, Value: ${value}`);
// });
