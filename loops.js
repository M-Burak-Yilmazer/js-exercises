/* -------------------------------------------------------------------------- */
/*                                 for döngüsü                                */
// /* -------------------------------------------------------------------------- */

// let n = 10;
// let result = 0;
// for (let i = 1; i <= n; i++) {
//   result += i;
// }
// console.log(result);

// let randomNum;

// for (let i = 1; i <= 5; i++) {
//   randomNum = Math.floor(Math.random() * 101);
//   console.log(`${i}. random number is ${randomNum}.`);
// }

// console.log("----------------------------------");
// /* -------------------------------------------------------------------------- */
// /*                                  Asal Sayı Sorusu : kendine bölünecek sadece                                */
// /* -------------------------------------------------------------------------- */

// let num1 = 7729;
// let asalsayi;

// for (let i = 2; i < num1; i++) {
//   if (num1 % i == 0) {
//     asalsayi = num1;
//     break;
//   }
// }
// if (asalsayi) {
//   console.log(`${num1} bir asal sayı değildir.`);
// } else {
//   console.log(`${num1} bir asal sayıdır`);
// }

// /* -------------------------------------------------------------------------- */
// /*                                    while                                   */
// /* -------------------------------------------------------------------------- */

// let i = 1;
// while (i <= 10) {
//   console.log(`${i}. "Merhaba"`);
//   i++;
// }

let guessNumber = +prompt("enter a number between 1-100");

while (guessNumber < 0 || guessNumber > 100) {
  guessNumber = +prompt("please enter a valid number, between 1-100");
}
alert(`Tebrikler "${guessNumber}" sayısı 1 ile 100 arasındadır.`);

// // let y = 1;
// // do {
// //   console.log("merhaba - ", y);
// //   y++;
// // } while (y <= 10);

// // let guessNumber = +prompt("enter a number between 1-100");
// // // do {
// // //   alert("please enter a valid number, between 1-100;");
// // //   guessNumber = +prompt("enter a number between 1-100");
// // // } while (guessNumber < 0 || guessNumber > 100);
// // // alert(`Tebrikler "${guessNumber}" sayısı 1 ile 100 arasındadır.`);

// // // console.log("q".charCodeAt());
// // // // console.log("Q".charCodeAt());

// let notes = prompt("values");
// let sum = 0;
// let sayac = 0;
// let average = 0;
// while (notes != "q" && notes != "Q") {
//   sum += Number(notes);
//   sayac++;
//   average = sum / sayac;
//   notes = prompt("values");
// }
// console.log(average);

// let randomNum = 5;
// let guessNum;
// let hak = 3;
// let durum = "Kazandınız";

// do {
//   if (hak == 0) {
//     durum = "Hakkınız tükendi.";

//     break;
//   }
//   guessNum = +prompt("enter a number");

//   randomNum > guessNum
//     ? alert("artır")
//     : randomNum == guessNum
//     ? alert("Kazandınız")
//     : alert("azalt");
//   hak--;
// } while (randomNum != guessNum && hak>=0);
// alert(durum);

let guessNum;
let randomValue = Math.floor(Math.random() * 101);
console.log(randomValue);
let right = 5;
let guess = false;

while (right > 0) {
  let guessNum = +prompt("enter a value");
  if (randomValue > guessNum) {
    right--;
    alert(`⬆️Increase your guess.You have ${right} right left.`);
  } else if (randomValue < guessNum) {
    right--;
    alert(`⬇️Decrease your guess.You have ${right} right left.`);
  } else {
    right--;
    alert(`🎉Congratulations🎉 ${5 - right}. denemede bildiniz.`);
    guess = true;
    right = 0;
  }
}
if (!guess) {
  alert("❌You Lost!❌");
}
