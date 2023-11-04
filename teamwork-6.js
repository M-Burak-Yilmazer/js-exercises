let given_number = [8, 148, 457];
let output = ["VIII", "CXLVIII", "CDLVII"];

let romanNumber = {
  birler: { 1: "I", 5: "V", 10: "X" },
  onlar: { 10: "X", 50: "L", 100: "C" },
  yüzler: { 100: "C", 500: "D", 1000: "M" },
};
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

let numberone = 456;
let result = "";
let numberOne = numberone.toString();

for (let i = numberOne.length - 1; i >= 0; i--) {
  let kalan = numberOne[i] % 5;

  for (let j = 0; j < 1; j++) {
    if (numberOne[i] < 5) {
      if (kalan < 4) {
        for (let i = 0; i < kalan; i++) {
          sonuc += romanNumber.birler[1];
        }
      } else {
        sonuc += romanNumber.birler[1] + romanNumber.birler[5];
      }
    } else if (numberOne[i] > 5) {
      if (kalan < 4) {
        sonuc = romanNumber.birler[5];
        for (let i = 0; i < kalan; i++) {
          sonuc += romanNumber.birler[1];
        }
      }
    }
  }
}
