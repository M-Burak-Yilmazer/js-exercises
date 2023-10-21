// 1. Soru: Verilen bir dizi içindeki tek sayıları bulup yeni bir diziye ekleyin.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arr = [];
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tekibul = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2) {
      arr.push(numbers[i]);
    }
  }
  return arr;
};
console.log(tekibul(number));

//  2. Soru: Bir dizi içindeki sayıları büyükten küçüğe sıralamak için hangi dizi yöntemini kullanırsınız ve nasıl yaparsınız?

let sayılar = [8, 4, 6, 2, 9, 5, 7];
sayılar.sort((a, b) => b - a);
console.log(sayılar);

// 3. Soru: Bir dizi içindeki metin öğelerini birleştirerek tek bir metin oluşturmak için hangi dizi yöntemini ve diziyi nasıl kullanırsınız?

let words = ["Merhaba", "dünya", "bu", "bir", "örnektir"];
console.log(words.join(" "));

// 4. Soru: Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.
console.log(words.join(" ").split(" ").reverse().join(" "));

let sentence = "JavaScript harika bir dil";
console.log(sentence.split(" ").reverse().join(" "));

// 5. Soru: Bir metinde "u" harfini içeren kaç kelime olduğunu bulmak için hangi dizi yöntemini kullanırsınız ve nasıl yaparsınız?

let text =
  "There are many shorthand techniques in JavaScript that can shorten the code length, reduce redundancy, and improve the readability and maintainability of the code. This article will introduce 20 JS abbreviation techniques to improve efficiency, helping you say goodbye to the shit mountain and write elegant code easily!";
let count = 0;
for (let i = 0; i < text.split(" ").length; i++) {
  if (text.split(" ")[i].includes("u")) {
    count++;
  }
}
console.log(count);

// 6. Soru: İki dizi içindeki ortak elemanları bulup yeni bir dizi oluşturun?

let arr1 = [1, 3, 3,4, 4, 5,4];
let arr2 = [3, 4, 5, ,3,4,4];
let arr3 = [];

for (let i = 0; i < arr1.length; i++) {
  if (arr2.includes(arr1[i])) {
    arr3.push(arr1[i]);
  }
}
console.log( arr3);

// 7. Bir isim listesindeki isimlerden ilk 10 ve son 10 ismi çıkartarak yeni bir sıralı liste oluşturun.

let isimListesi = [
  "Ali",
  "Ayşe",
  "Mehmet",
  "Fatma",
  "Hasan",
  "Zeynep",
  "Emre",
  "Selin",
  "Mustafa",
  "Elif",
  "Baran",
  "Gamze",
  "Eren",
  "Dilara",
  "Burak",
  "Pınar",
  "İsmail",
  "Sibel",
  "Murat",
  "Gülşah",
  "Ahmet",
  "Hatice",
  "Kemal",
  "Sevgi",
  "Yusuf",
  "Aslı",
  "Can",
  "Zehra",
  "Onur",
  "Ebru",
  "Serkan",
  "Nazlı",
  "Cemal",
  "Gonca",
  "Ercan",
  "Esra",
  "Hakan",
  "Nur",
];

isimListesi.splice(0, 10);
isimListesi.splice(-10, 10);
console.log(isimListesi);
