// // array is a collection of different datatypes
// // non - primitive datatype
// // let arr = [10, 20, 30, 40, 50];
// // console.log(arr);

// // let arr1 = [10,3.4,6.6666666, true, false, null, undefined,'khushi']
// // console.log(arr1)

// // methods of array

// // let arr=['apple','mango','grapes','kiwi','cherry','cheeku','pineapple']
// // console.log(arr.reverse())
// // console.log(arr.slice(1,4))
// // console.log(arr.indexOf('lemon'))
// // console.log(arr.join('🍂'))

// // let text = 'hello';
// // console.log(text.split('').reverse().join(''))
// // last -> value 3 -> 2
// // arr.splice(1,3,'value')
// // console.log(arr)

// // pop
// // arr.pop()
// // arr.pop()
// // arr.push("counting",45,79)
// // arr.shift() //to remove value from starting
// // arr.unshift(56) // to add value from starting

// // // shift and unshift
// // // to remove last value from an array
// // console.log(arr)
// // console.log(arr.concat(arr1))

// // let arr = [1, 267, 3, 10, 23, 100, 11];
// // console.log(arr.sort((a, b) => b - a));
// // make  a function with parameter and argument and find the max and min number in array
// // [1,2,3,4,4,4]
// // function findmax(arr) {
// //   let min = arr[0];
// //   let max = arr[0];
// //   if (arr.length === 0) {
// //     console.log("this array is empty");
// //   } else {
// //     for (let i = 1; i < arr.length; i++) {
// //         if(arr[i]<min){
// //             min = arr[i];
// //         }
// //         if(arr[i]>max){
// //             max = arr[i]
// //         }
// //     }
// //   }
// //   console.log(max)
// //   console.log(min)
// // }

// // findmax([1,3,3,4,4,5,5,5,6])

// // string - hello olleh

// // function reversedtheword(word) {
// //   let reverd = "";
// //   for (i = word.length - 1; i >= 0; i--) {
// //     /*
// //     hello
// //     5-1
// //     4->ol
// //      */
// //     reverd = reverd + word[i];
// //   }
// //   console.log(reverd);
// // }
// // reversedtheword("hello");
// // vowels

// // function countvowel(str) {
// //   let vowel = "aeiouAEIOU";
// //   let count = 0;
// //   for (let i = 1; i < str.length; i++) {
// //     for (let j = 1; j < vowel.length; j++) {
// //         if(str[i]=== vowel[j]){
// //             count = count + 1;
// //             break;
// //         }
// //     }
// //   }
// // console.log(count)
// // }
// // countvowel('hello')

// // objects

// let person = {
//   name: "tushar",
//   age: 25,
//   weight: 62,
//   height: 6,
//   isisngle: false,
//   address: "delhi",
//   gender: "male",
//   display: function () {
//    console.log(`hey everyone my name is ${person.name} and my age is ${person.age} my address is ${person.address} nice to meet you  `)
//   },
// };

// // for in loop -> names
// for(let key in person){
//     console.log(key ,":", person[key] )
// }
// person.display()
// // // accessing the object key
// // person.age = 27
// // person.city = 'jaipur'
// // delete person.name
// // console.log(person)

// Array of objects -> collection of multiple objects inside a array it is known as array of objects Json

// let arr = [
//   { name: "ram", age: 26, isdeveloper: false },
//   { name: "rashmika", age: 24, isdeveloper: true },
//   { name: "jatin", age: 25, isdeveloper: true },
//   { name: "harshit", age: 16, isdeveloper: true },
//   { name: "gauri", age: 22, isdeveloper: true },
// ];
// // console.log(arr);

// let newarr = arr.map((elem) => `${elem.age * 2}`);
// console.log(newarr);

// 1.Create an object named movie with properties title, director, year, and genres (an array). Add a method getMovieInfo that returns a string with the movie's title and director.

// let movies = {
//   director:'farah khan',
//   movie :'om shanti om',
//   year:2007,
//   genres :['deepika','shahrukh'],
//   getmovieinfo:function(){
//     console.log(`the movie is ${movies.movie} and director is ${movies.director} and year is ${movies.year} nd characters are ${movies.genres}`)
//   }

// };
// movies.getmovieinfo()

// //Create an array of objects representing books, each with properties title, author, and year.filter out the year that are less than 1950
//
// const books = [
//   { title: "1984", author: "George Orwell", year: 1959 },
//   { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//   { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
//   { title: "Brave New World", author: "Aldous Huxley", year: 1970 },
// ];
// function getbookname(bookname, yearname) {
//   return bookname.filter((elem) => elem.year > yearname);
// }
// console.log(getbookname(books, 1950));
//var , let and const
// var-> ES5 , let and const  - ES6
// hoisting
// 1.You have an array of user objects with name and age. Filter the age with making a function getage below than 18 .
// 2.You have an array of user objects with name and age. Create a new array of objects containing only name and isAdult (true if age ≥ 18).
// use reduce for above question
const users = [
  { name: "Bob", age: 16 },
  { name: "Charlie", age: 30 },
  { name: "tushar", age: 25 },
  { name: "liza", age: 45 },
];

let merged = users.reduce((acc,user)=>{
acc[user.name]= user.age;
return acc
},{})
console.log(merged)

/*
Combine an array of objects into a single object where keys are name and values are age use reduce
output:
{tushar: 25, Bob: 16, Charlie: 30,liza:45 }
 
*/

// let oldest = users.reduce(
//   (elem, max) => (elem.age > max.age ? elem : max),
//   users[0]
// );
// console.log(oldest);

// let oldest = users[0];
// users.forEach((elem)=>{
//     if(elem.age>oldest.age){
//         oldest = elem
//     }
// })
// console.log(oldest)
// 6.use foreach loop find the greatest one

// let sorted = users.sort((a, b) => b.age - a.age);
// console.log(sorted);
// let arr=[10,33,233,2,3,23,23];
// arr.forEach((elem)=>{
//     console.log(elem)
// })
// 5.Sort users by their age in descending order and ascending order.

// let getage = users.find((elem) => elem.age > 20);
// console.log(getage);

// let totalAge = users.reduce((sum,username)=> sum + username.age,0)
// console.log(totalAge)

// 4.Find the first user whose age is greater than 20.

// 3.Calculate the total age of all users in the array.

// let newarr = users.map((elem) => ({
//   name: elem.name,
//   isAdult: elem.age >= 18,
// }));
// console.log(newarr)
// function getone(username,agesuser){
//     return username.filter((elem)=>elem.age<agesuser)
// }
// console.log(getone(users,18))
