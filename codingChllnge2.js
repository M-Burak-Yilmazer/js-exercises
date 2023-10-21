// soru 1: bir dizideki sayıların ortalamasını bulan fonksiyonu yazınız?
let sum = 0;
let average = 0;
let numbers1 = [1, 2, 3, 45, 65];
numbers1.forEach((numbers, i) => {
  sum += numbers;
  average = sum / i;
});
console.log(average);

// soru 2: Soru: Bir dizi içerisindeki sayıların karesini alarak her bir sayıyı konsola yazdırın.
let numbers3 = [1, 2, 3, 4, 5];
numbers3.forEach((number, i) => console.log(number, number ** 2));

// soru 3: Soru: Bir dizi içerisindeki sayıların karesini alarak yeni bir dizi oluşturun. Ardından, bu yeni dizideki çift sayıları filtreleyerek sadece çift sayıları içeren bir başka dizi oluşturun
let numbers4 = [1, 2, 3, 4, 5];
let num = numbers4.map((number) => number ** 2);
console.log(num);
// soru 4: Soru: Verilen bir diziyi tersine çevirin, ancak yalnızca forEach kullanarak yapın (reverse() kullanmadan).
let numbers5 = [1, 2, 3, 4, 5];
let reversedNum = [];
numbers5.forEach((num) => reversedNum.unshift(num));
console.log(reversedNum);

// soru 5: Soru: Bir dizi içindeki metin öğeleri içeren bir dizi verildiğinde, her öğeyi tersine çevirerek yeni bir dizi oluşturun.
// çıktı : ["tpircSavaJ", "nohtyP", "avaJ", "++C"
let words = ["JavaScript", "Python", "Java", "C++"];
let ters = words.map((word, i, arr) => word.split("").reverse().join(""));
console.log(ters);

// soru 6: Soru: Bir dizi içindeki asal sayıları filtreleyerek  yeni bir dizi oluşturun
let numbers6 = [1, 2, 3, 8, 21, 23, 41, 44, 53];
let asal = numbers6.filter((number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
});
console.log(asal);

// soru 7: Soru: Bir dizideki sayıların karelerinden çift sayıların iki katlarının toplamını bulun
let numbers7 = [1, 2, 3, 4, 5];
let sum1 = 0;
let numbbb = numbers7
  .map((number) => number ** 2)
  .filter((num) => !(num % 2))
  .map((n) => n * 2)
  .reduce((acc, curr) => acc + curr);
console.log(numbbb);
