let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = txt.replaceAll(".", "").replaceAll(",", "").split(" ");

console.log(words);
let abt = "sas";
let array = Array(abt);
console.log(array);
let arr = Array(5).fill("4");
console.log(arr);
arr = arr.concat(abt);
console.log(arr);
console.log(Array.isArray(arr));
const number = [1, 2, 3, 4, 5];
console.log(typeof number.join(", "));

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.splice(0, 4,"elma","armut","atlı"));
console.log(numbers.pop())
let pops = numbers.pop()
console.log(pops)
console.log(numbers.shift());
console.log(numbers)
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
console.log(webTechs.sort().reverse().join(", "));