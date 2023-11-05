// let sonuc = "";
// let getRoman = (number) => {
//   let kalan = number % 5;
//    console.log(kalan);
//   if (kalan < 4) {
//     for (let i = 0; i < kalan; i++) {
//       sonuc += "I";
//     }
//   } else if ((kalan = 4)) {
//     sonuc = "IV";
//   } else {
//     console.log(kalan)
//     sonuc = "V";
//   }
//   return sonuc;
// };
// console.log(getRoman(8));

// let number = 4576;
// let birler = number % 10;

// let onlar = Math.floor((number / 10) % 10);

// let yüzler = Math.floor((number / 100) % 10);

// let binler = Math.floor(number / 1000);

// let getRoman = (number) => {
//     let kalan ;
//     let sonuc = "";
//   let birler = number % 10;
//   let onlar = Math.floor((number / 10) % 10);
//   let yüzler = Math.floor((number / 100) % 10);
//   let binler = Math.floor(number / 1000);
// if(birler){
// kalan = birler%5
//     if(birler<5){

//     }
// }

// };

// let numberone = 13;
// let sonuc = "";
// let numberOne = numberone.toString();

// for (let i = numberOne.length - 1; i >= 0; i--) {
//   let kalan = numberOne[i] % 5;

//   for (let j = 0; j < 1; j++) {
//     if (numberOne[0] < 5) {
//       if (kalan < 4) {
//         for (let i = 0; i < kalan; i++) {
//           sonuc += romanNumber.birler[1];
//         }
//       } else {
//         sonuc += romanNumber.birler[1] + romanNumber.birler[5];
//       }
//     } else if (numberOne[0] > 5) {
//       if (kalan < 4) {
//         sonuc = romanNumber.birler[5];
//         for (let i = 0; i < kalan; i++) {
//           sonuc += romanNumber.birler[1];
//         }
//       } else {
//         sonuc += romanNumber.birler[1] + romanNumber.birler[10];
//       }
//     }
//   }
// }

// console.log(sonuc);

const romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

let num = 334;
let roman = "";
console.log(romanNumerals);

for (let key in romanNumerals) {
  console.log(key);
  numbervalue = romanNumerals[key];
  while (num >= numbervalue) {
    roman += key;
    num -= numbervalue;
  }
}
console.log(roman);
