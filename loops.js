// let i = 1;
// while(i<=100){
//     console.log(i);
//     i++;
// }
// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// 1.Print numbers from 1 to 10:
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// 2.Print even numbers from 1 to 200:

// for (let i = 1; i <= 200; i = i + 1) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }
// 3.Print odd numbers from 1 to 200:

// 4.Print numbers from 10 to 1:

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// 5.Print the first 10 multiples of 15:
// let num = 15;
// for(let i = 1;i<=10;i=i+1)
// {
//     console.log(`${num} X ${i} = ${num*i}`)
// }

// 6.Print the sum of numbers from 1 to 10:
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// 11.FizzBuzz Problem: Print numbers from 1 to 100. For multiples of 3, print "Fizz", for multiples of 5, print "Buzz", and for multiples of both 3 and 5, print "FizzBuzz".

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz", i);
  } else if (i % 5 === 0) {
    console.log("buzz", i);
  } else if (i % 3 === 0) {
    console.log("Fizz", i);
  } else {
    console.log("not!", i);
  }
}
