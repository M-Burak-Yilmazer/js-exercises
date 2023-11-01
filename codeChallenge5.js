// //*Square the value of every element in the array. Presume that you will only get numbers in the input array.
// const input1 = [1, 2, 3, 4, 5];

// // input1.forEach((a) => console.log(a ** 2));

// // //result [1, 4, 9, 16, 25];

// //!If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

// const input2 = [1, -4, 12, 0, -3, 29, -150];

// // console.log(
// //   input2.reduce(
// //     (result, item) => (item > 0 ? result + item : result),

// //     0
// //   )
// // );
// //
// //?Calculate the mean and median values of the number elements from the input array.
// const input3 = [12, 46, 32, 64];
// input3.sort((a, b) => a - b);
// //output { mean: 38.5, median: 39 }

// // const mean = input3.reduce(
// //   (result, item, index, array) => {
// //     result.mean += item / array.length;

// //     if (array.length % 2 === 0) {
// //       if (index === array.length / 2 - 1) {
// //         result.median += item;
// //       } else if (index === array.length / 2) {
// //         result.median += item;
// //         result.median /= 2;
// //       }
// //     } else {
// //       if (index === (array.length - 1) / 2) {
// //         result.median = item;
// //       }
// //     }

// //     return result;
// //   },
// //   { mean: 0, median: 0 }
// // );
// // console.log(mean);

// //*The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
// const input4 = "George Raymond Richard Martin";
// //result "GRRM"

// //!Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
// const input = [
//   {
//     name: "John",
//     age: 13,
//   },
//   {
//     name: "Mark",
//     age: 56,
//   },
//   {
//     name: "Rachel",
//     age: 45,
//   },
//   {
//     name: "Nate",
//     age: 67,
//   },
//   {
//     name: "Jennifer",
//     age: 65,
//   },
// ];

// let ages = input.sort((a, b) => {
//   if (a.age > b.age) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(ages);

// const agess = input.map(item => item.age);

// //result [13, 67, 54];

// //! Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e

// const input6 = "Every developer likes to mix kubernetes and javascript";
// //result "E3y d7r l3s to mix k8s and j8t";

// //todo: If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.

// const input7 = 6;
// //result 720;

// //!Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.
// const input8 = [
//   ["a", "b", "c"],
//   ["c", "d", "f"],
//   ["d", "f", "g"],
// ];

// //result   {
// //     a: 1,
// //     b: 1,
// //     c: 2,
// //     d: 2,
// //     f: 2,
// //     g: 1,
// //   }

// //*You are given an array of objects representing a group of students, each with a name and an array of test scores. Your task is to use map, filter, and reduce to calculate the average test score for each student, and then return an array of objects containing only the students who have an average score above 90.
// const students = [
//   { name: "Alice", scores: [90, 85, 92] },
//   { name: "Bob", scores: [75, 80, 85] },
//   { name: "Charlie", scores: [90, 95, 85] },
//   { name: "David", scores: [100, 100, 100] },
// ];

// //result [
// //   { name: 'Jack', average: 100 }
// // ]

// //!Write a function called convertArrayToObject which can convert the array to a structure object.
// const student3 = [
//   ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
//   ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
// ];

// console.log(convertArrayToObject(student3))[
//   ({
//     name: "David",
//     skills: ["HTM", "CSS", "JS", "React"],
//     scores: [98, 85, 90, 95],
//   },
//   {
//     name: "John",
//     skills: ["HTM", "CSS", "JS", "React"],
//     scores: [85, 80, 85, 80],
//   })
// ];

//You are given an array of objects representing a collection of products, each with a name, price, and category. Your task is to use map, filter, and reduce to calculate the average price of products in each category, and then return an array of objects containing only the categories that have an average price above 50

const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
  { name: "Product 9", price: 30, category: "Electron" },
];

let unique = [];
products.forEach(
  (item) => unique.includes(item.category) || unique.push(item.category)
);

// console.log(products.filter((item) => item.category == "Clothes"));
// [
//   { category: "Clothes", average: 55 },
//   { category: "Electronics", average: 55 },
// // ];

let result = [];
for (let item of unique) {
  result.push({
    category: item,
    average:
      products
        .filter((index) => index.category == item)
        .reduce((sum, int) => sum + int.price, 0) /
      products.filter((index) => index.category == item).length,
  });
}
console.log(result);
console.log("------------------------------");

console.log(result.filter((eleman) => eleman.average > 50));

const employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];

let baslik = [];
employees.forEach(
  (item) => baslik.includes(item.department) || baslik.push(item.department)
);
console.log(baslik);

let sonuc = [];

for (eleman of baslik) {
  sonuc.push({
    department: eleman,
    average: Number(
      (
        employees
          .filter((item) => item.department == eleman)
          .reduce((acc, int) => acc + int.salary, 0) /
        employees.filter((item) => item.department == eleman).length
      ).toFixed(0)
    ),
  });
}
console.log(sonuc);
console.log(sonuc.filter((item) => item.average > 65000));
