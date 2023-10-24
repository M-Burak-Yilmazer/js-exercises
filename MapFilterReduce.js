// const input = [1, -4, 12, 0, -3, 29, -150];

// console.log(input.filter((num) => num > 0).reduce((acc, num) => acc + num, 0));

// const input2 = [12, 46, 32, 64];
// input2.sort((a, b) => a - b);

// const mean = input2.reduce(
//   (acc, int, index, array) => {
//     acc.mean += int / array.length;

//     if (array.length % 2 === 0) {
//       if (index === array.length / 2 - 1) {
//         acc.median += int;
//       } else if (index === array.length / 2) {
//         acc.median += int;
//         acc.median /= 2;
//       }
//     } else {
//       if (index === (array.length - 1) / 2) {
//         acc.median += int;
//       }
//     }

//     return acc;
//   },
//   { mean: 0, median: 0 }
// );
// console.log(mean);

// const input3 = "George Raymond Richard Martin";
// const shiftword = input3
//   .split(" ")
//   .map((word) => word[0])
//   .join("");
// console.log(shiftword);

// const inputAge = [
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

// let ages = inputAge.map((product) => product.age);
// console.log(ages);
// console.log(Math.min(...ages));
// let complex = [];
// const maxMin = (arr) => {
//   complex.push(Math.min(...arr));
//   complex.push(Math.max(...arr));
//   complex.push(Math.max(...arr) - Math.min(...arr));
//   return console.log(complex);
// };
// maxMin(ages);

const sentence = "Every developer likes to mix kubernetes and javascript";
const abbreviatedSen = sentence
  .split(" ")
  .map((word) => {
    return word.length > 3
      ? `${word[0]}${word.length - 2}${word[word.length - 1]}`
      : word;
  })
  .join(" ");

console.log(abbreviatedSen);

const num = 6;

const array = new Array(num).fill(null);
console.log(array);

let carpım = array.map((p, i) => i + 1).reduce((acc, int) => acc * int, 1);
console.log(carpım);

const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat().flat().flat());

const input2 = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];
console.log(input2.flat());



// const students = [
//   { name: "Alice", scores: [90, 85, 92] },
//   { name: "Bob", scores: [75, 80, 85] },
//   { name: "Charlie", scores: [90, 95, 85] },
//   { name: "David", scores: [100, 100, 100] },
// ];
// const studentAverage = students.map((student) => {
//   const sum = student.scores.reduce((acc, int) => acc + int, 0);
//   return {
//     name: student.name,
//     average: sum / student.scores.length,
//   };
// });

// console.log(studentAverage);
// const filteredAverage = studentAverage.filter((student) => student.average>90)
// console.log(filteredAverage)
