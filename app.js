// // let not1 = +prompt("sayı giriniz");
// // switch (not1) {
// //   case 1:
// //   case 2:
// //   case 3:
// //   case 4:
// //   case 5:
// //   case 6:
// //   case 7:
// //   case 8:
// //   case 9:
// //   case 10:
// //   case 11:
// //   case 12:
// //   case 13:
// //   case 14:
// //   case 15:
// //   case 16:
// //   case 17:
// //   case 18:
// //   case 19:
// //   case 20:
// //   case 21:
// //   case 22:
// //   case 23:
// //   case 24:
// //     not1 = "FF";

// //     break;

// //   default:
// //     not1 = "AAAA";
// //     break;
// // }
// // alert(`notunuz yeni değeri ${not1}`);

// let sayi1 = +prompt("bir sayı giriniz");

// let sayi2 = +prompt("bir sayı giriniz");
// let sayi3 = +prompt("bir sayı giriniz");
// let maxdeger;
// let deger;
// let isaret = prompt("bir isaret isteyiniz");

// switch (isaret) {
//   case "+":
//     deger = sayi1 + sayi2 + sayi3;
//     break;

//   case "*":
//     deger = sayi1 * sayi2 * sayi3;
//     break;

//   case sayi1 > sayi2 && sayi1 > sayi3:
//     maxdeger = sayi1;
//     break;

//   case sayi2 > sayi3 && sayi2 > sayi1:
//     maxdeger = sayi2;
//     break;

//   case sayi3 > sayi1 && sayi3 > sayi2:
//     maxdeger = sayi3;
//     break;

//   default:
//     break;
// }
// console.log(` ücünün ${isaret} : ${deger}`);
// console.log(`max deger: ${maxdeger}`);

// **let randomNumber = Math.round(Math.random() * 99 + 1);
// // console.log(randomNumber)
// **let guestNumber = +prompt("Please enter a number between in  1-100");

// **if (guestNumber < 0 || guestNumber > 100) {
//** */   alert("Please enter a number between in  1-100 ");
//** */ }
//** */ if (randomNumber == guestNumber) {
//** */   alert(`Congrats 🥇 ; You guessed the number ${randomNumber} correctly. `);
//** */ } else {
//** */   alert(`Sorry 🥹 :( You didn't guess the number ${randomNumber}, try again`);
//** */ }


//*GET SEASON CHECKER
let month = +prompt("enter a month value: between 1-12");

let day = +prompt("enter a day value: between 1-31");
let season;

if (month < 1 || month > 12 || day < 1 || day > 31) {
  alert("Please enter a valid value");
}
if ((month == 2 && day >= 21) || (month < 6 && month > 2)) {
  season = "Spring";
} else if ((6 <= month && month <= 8) || (month == 9 && day <= 21)) {
  season = "Summer";
} else if (
  (month == 9 && day >= 22) ||
  (month < 12 && month > 9) ||
  (month == 12 && day <= 20)
) {
  season = "Fall";
} else {
  season = "Winter";
}

console.log(`The season ${month}/${day} is ${season}`);
