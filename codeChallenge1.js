console.log("merhaba");
// 1- 18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını if/else ve ternary yapı ile konsola yazdıran kodu yazınız.
let yas = 18;
let vatandas = true; //confirm("are you a turkish citizen")
yas >= 18 && vatandas
  ? console.log(`Yasınız ${yas} ve oy kullanabilirsiz`)
  : console.log(`yasınız ${yas} ve oy kullanamazsınız`);

// 2- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit
let celciusToFahrenait = (celceius) =>
  console.log(celceius, "celcius =", (celceius * 9) / 5 + 32 + " Fahreneit");
celciusToFahrenait(20);

// 3- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?
// let str = "yaya";
// let tersiniBul = (word) => {
//   let len = word.length;
//   let ters = "";
//   for (let k = len-1; k >= 0; k--) {
//     ters =ters + word[k];
//   }
//   return ters;
// };
// console.log(tersiniBul(str));

// 4- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?

let str = "yaya";
let tersiniBul = (word) => {
  let len = word.length;
  let ters = "";
  let palindrome;
  for (let k = len - 1; k >= 0; k--) {
    ters = ters + word[k];
  }
  palindrome = word == ters ? "palindromdur." : "palindrom değildir.";
  return palindrome;
};
console.log(`"${str}" kelimesi ${tersiniBul(str)}`);
// 5- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?
// let vowels= [a,e,ı,i,o,u,ö,ü]
// let stra = "kardeşim ben senin yılgın bir hoşgörüyle beni benimsemenemi mi kaldım?"

// const sesli = (item) =>{
//   for (let i = 0; i <item.split("").length )
// }

// 6- Belirli bir sayının tam bölenlerinin toplamını bulan fonksiyonu yazınız?

let n = 15;

let bölen = (n) => {
  let toplam = 0;
  for (let i = 1; i <= n - 1; i++) n % i ? null : (toplam += i);

  return toplam;
};
console.log(bölen(15));

// ((accumulator, currentValue) => accumulator + currentValue, initialValue);

// 7- Belirli bir sayının asal olup olmadığını bulan fonksiyonu yazınız? 2, 3, 5, 7, 11, … şeklinde devam eden, kendisinden ve 1'den başka pozitif böleni olmayan 2 ve 2'den büyük sayılara “asal sayı” denir.

// 8-Girilen bir cümledeki kelime sayısını bulan bir fonksiyon yazınız.
let stra =
  "kardeşim ben senin yılgın bir hoşgörüyle beni benimsemenemi mi kaldım?";
console.log(stra.split(" ").length);

// 9- Bir kelime ve bir harf olmak üzere İki adet string parametre alan ve girilen harften girilen kelime içinde kaç adet olduğunu sonuç olarak dönen bir fonksiyon yazınız.
// Girilen harf kelime içinde yoksa 0 dönmeli.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:
// The first argument can be an empty string

// let str1 ="school"
// // let harf =prompt("")
// let o = /o/gi

// // let harfibul = (str,harf)=> {
// //  let counter =0;
// //  for( let i = 0; i<str.length; i++){
// //   if(str[i] == harf) counter++

// //  }return counter
// // }
// // console.log(harfibul(str1,harf))


// console.log(str1.matchAll("o"))
let areAnagrams = (str1, str2) =>
  str1.toLowerCase().replaceAll(" ", "").split("").sort().join() ==
  str2.toLowerCase().replaceAll(" ", "").split("").sort().join();

console.log(areAnagrams("listen", "silent")); // Should print true
console.log(areAnagrams("triangle", "integral")); // Should print true
console.log(areAnagrams("debit card", "bad credit")); // Should print true
console.log(areAnagrams("Dormitory", "dirty room")); // Should print true
console.log(areAnagrams("The Morse Code", "Here come dots")); // Should print true
console.log(areAnagrams("Astronomer", "Moon starer")); // Should print true
console.log("-----");
console.log(areAnagrams("hello", "world")); // Should print false
console.log(areAnagrams("apple", "banana")); // Should print false
console.log(areAnagrams("hello", "holla")); // Should print false
console.log(areAnagrams("race", "racing")); // Should print false
