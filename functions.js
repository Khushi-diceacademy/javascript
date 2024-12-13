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

function findoccurence(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
console.log(findoccurence("hello", "l"));
