/*
Dom -> Document object model
usye ye kar do ye hone pe 
*/

// Accessing elements
// save and select
// selection and save

//  document.getElementById('btn')
// document.getElementsByClassName('btnh')
// let selected = document.getElementsByTagName('button')
// let kisi = document.querySelector('#btn')

// make 2 img tags 2 h1 give id and class use all document selection

// document.querySelector('#h111')
// document.getElementById('img1')
// document.getElementsByClassName('img2')
// document.getElementsByTagName('h1')

// let btn = document.querySelector('#btn')
// btn.textContent += ' clicked ho gya'
// btn.style.backgroundColor = 'cadetblue'
// btn.style.color = 'white'
// btn.innerHTML = '<b>clicked ho gya</b>'

// let h1 = document.querySelector("h1");
// h1.classList.add("hell");

// let h2 = document.createElement("h2");
// h2.textContent = "how are you?";
// document.querySelector('body').appendChild(h2)
// // h1.classList.remove('hell')

// let img = document.createElement('img');
// img.src = 'https://plus.unsplash.com/premium_photo-1676272747130-348694463771?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
// document.querySelector('body').appendChild(img)
// img.classList.add('heaven')

// jab bhi ap kisi type ka koi event raise karte ho toh event by default call ho jata h otherwise javascript ignores the event.

// event listeners

// let btn = document.querySelector("#btn");
// btn.addEventListener("dblclick", function () {
//   alert("hey dosto kese h ap sabhi");
//   btn.innerHTML = "clicked!"
// });

// document.querySelector('body').addEventListener('mousemove',function(){
//     console.log("hey")
// })

// create an HTML file an unordered list ul containting several list items li . when a list item is clicked changes its text to "clicked !" also change the background color

// let listitems = document.querySelectorAll("#myList li");
// listitems.forEach(function (items) {
//   items.addEventListener("click", function () {
//     alert(`this is a fruit and its name is ${items.innerText}`)
//     items.textContent = "clicked!";
//     items.style.backgroundColor = "cadetblue"
//     items.style.color ="white";

//   });
// });
// button 1 ,button 2  + styling

// let btn1 = document.querySelector('#btn1')
// let btn2 = document.querySelector('#btn2')

// btn1.addEventListener("click",function(){
//     btn2.style.visibility = 'hidden';
//     btn1.style.backgroundColor ="plum";
//     btn1.style.color ="white";
//     btn1.style.border ="2px solid white";
//     btn1.style.padding ='12px 34px';

// })
// btn2.addEventListener("click",function(){
//     btn1.style.visibility = 'hidden';
//     btn2.style.backgroundColor ="plum";
//     btn2.style.color ="white";
//     btn2.style.border ="2px solid white";
//     btn2.style.padding ='12px 34px';

// })

// bulb bana ke lana h

// let btn = document.querySelector('#btn');
// let img1 = document.querySelector('#one');
// let img2 = document.querySelector('#two');
// btn.addEventListener('click',function(){
//     let src1 = img1.src;
//     let src2 = img2.src;
//     img1.src = src2;
//     img2.src = src1
// })

// let mn = document.querySelector("#mn");
// let res = document.querySelector("#res");
// let flag = 0;

// mn.addEventListener("click", function () {
//   if (flag == 0) {
//     res.style.left = "0%";
//     res.style.transition = "0.7s";
//     flag = 1;
//     mn.innerHTML = ``
//   } else {
//     res.style.left = "-60%";
//     res.style.transition = "0.7s";
//     flag = 0;

//   }
// });
/*
 homework -> top navigation 
 checkbox - > message you are checked !

 
 */

let home = document.querySelector("#home");
let contact = document.querySelector("#contact");
let about = document.querySelector("#about");
let hometext = document.querySelector("#hometext");
let abouttext = document.querySelector("#abouttext");
let contacttext = document.querySelector("#contacttext");


home.addEventListener("click",function(){
    saretexthatao()
    hometext.style.display = 'block'
})

contact.addEventListener("click",function(){
    saretexthatao()
    contacttext.style.display = 'block'
})
about.addEventListener("click",function(){
    saretexthatao()
    abouttext.style.display = 'block'
})

function saretexthatao(){
document.querySelectorAll('h3').forEach((elem)=>{
    elem.style.display = 'none'
})}