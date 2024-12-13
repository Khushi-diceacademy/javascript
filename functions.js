// function declaration

// function abcd(){
//     console.log("heyyy");

// }
// abcd()
// abcd()

//function expression
// jab tum kisi function ko kisi variable ke andar store karate ho usye function expression bolte h

// let xyz = function(){
//     console.log("heyy kese ho");

// }
// xyz()

// Arrow function
// Es6
// let kisivariable = () => {
//   console.log("heyyy");
// };
// kisivariable();

// implicit function with one parameter

// function abcd(a,b){
//     console.log(a+b);
// }
// abcd(10,20)

// let xyz = a => console.log(a);
// xyz(10)

// return function

// function abcd(a,b){
//     return a*b;
// }
// console.log(abcd(10,20));

// let xyz = function(){
//     return "heyyyyy"
// }
// console.log(xyz())

// list out the even numbers and odd numbers with for loop from 2 to 200 create a function for it function declaration , function expression , parameter function , return and arrow function

// let FindOut = (start, end) => {
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       console.log("this is a even number", i);
//     } else {
//       console.log("this is a odd number", i);
//     }
//   }
// };
// FindOut(10, 20);
// FindOut(200,300)

// check the numner is prime or not

//
// function isPrime(num){
//     if(num<=1){
//         return false;
//     }
//     for(let i = 2;i<=num/2;i++){
//         if(num%i===0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(9))

// factorial 5 = 120 5*4*3*2*1

// function findfact(num) {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result = result * i;
//   }
//   return result;
// }
// console.log(findfact(3))

// reverse a string -> hello -> olleh

// function reversedstr(str) {
//   let reverd = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverd = reverd + str[i]
//   }
//   return reverd
// }
// console.log(reversedstr("hello"))
// console.log(reversedstr("radha"))

// count vowel in a string -> 2 loop

// function countVowel(str) {
//   let count = 0;
//   let vowels = "aeiouAEIOU";
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//         if(str[i]===vowels[j]){
//             count++;
//         }
//     }
//   }
//   return count
// }

// console.log(countVowel("good morning"))

// count the occurences of the character in a particular string

// function findoccurence(str, char) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(findoccurence("hello", "l"));'

// let arr =[ 10,20,30,40,50];
// let newarr= arr.map((elem)=>elem/2)
// console.log(newarr)
// console.log(arr)
// map reduce filter

// arr= []

// let arr = ['apple','mango','grapes','kiwi','cheeku'];
// let newarrr=arr.map((elem)=> elem.toUpperCase())
// console.log(newarrr)

// let arr= [1,2,3,4,5,5,56,7,8,10];
// let newarr= arr.map((elem)=>elem**2)
// console.log(newarr)

// filter

// let arr = [1, 2, 4, 5, 6, 7, 8, 10, 11, 12, 14];
// let newarr = arr.filter((elem) => elem % 2 === 0);
// console.log(newarr);

// >3

// let arr = ["apple", "snowwhite", "fox", "jin", "harry"];
// let newarr = arr.filter((elem) => !elem.startsWith("h"));
// console.log(newarr);

// let arr = [1, 2, 3, 4, 4, 5, 6,100];
// let newarr = arr.reduce((accu, ccu) => Math.max(accu, ccu));
// console.log(newarr);


// multiplication 
// max 

// foreach -> loop
let arr= [1,2,4,4,5,556,6,7];
for(const val in arr){
  console.log(arr[val])
}


// map,filter reduce , foreach, for of , for - in
