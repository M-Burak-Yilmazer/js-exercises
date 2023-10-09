/* -------------------------------------------------------------------------- */
/*                                 for döngüsü                                */
/* -------------------------------------------------------------------------- */

let n = 10;
let result = 0;
for (let i = 1; i <= n; i++) {
  result += i;
}
console.log(result);

let randomNum;

for (let i = 1; i <= 5; i++) {
  randomNum = Math.floor(Math.random() * 101);
  console.log(`${i}. random number is ${randomNum}.`);
}

console.log("----------------------------------");
/* -------------------------------------------------------------------------- */
/*                                  Asal Sayı Sorusu : kendine bölünecek sadece                                */
/* -------------------------------------------------------------------------- */

let num1 = 7729;
let asalsayi;

for (let i = 2; i < num1; i++) {
  if (num1 % i == 0) {
    asalsayi = num1;
    break;
  }
}
if (asalsayi) {
  console.log(`${num1} bir asal sayı değildir.`);
} else {
  console.log(`${num1} bir asal sayıdır`);
}

/* -------------------------------------------------------------------------- */
/*                                    while                                   */
/* -------------------------------------------------------------------------- */

let i = 1;
while (i <= 10) {
  console.log(`${i}. "Merhaba"`);
  i++;
}

// let guessNumber = +prompt("enter a number between 1-100");
// // // if (isNaN(guessNumber) || guessNumber == "") {
// // //   alert("Please enter a valid number value");
// // // } else {

// // }
//  while (guessNumber < 0 || guessNumber > 100) {
//    alert("please enter a valid number, between 1-100;");
//    guessNumber = +prompt("enter a number between 1-100");
//  }
//  alert(`Tebrikler "${guessNumber}" sayısı 1 ile 100 arasındadır.`);


let y = 1;
do {
  console.log("merhaba - ", y);
  y++;
} while (y <= 10);


let guessNumber = +prompt("enter a number between 1-100");
do {
  alert("please enter a valid number, between 1-100;");
  guessNumber = +prompt("enter a number between 1-100");
} while (guessNumber < 0 || guessNumber > 100);