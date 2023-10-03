let leapYear = +prompt("Enter a year value");
let outcome;

// if (!(leapYear % 4)) {
//   if (!(leapYear % 100)) {
//     if (!(leapYear % 400)) {
//       outcome = "a Leap Year";
//     } else {
//       outcome = "Not a Leap Year";
//     }
//   } else {
//     outcome = "a Leap Year";
//   }
// } else {
//   outcome = "Not a Leap Year";
// }
// console.log(`${leapYear} is ${outcome}`);

if (
  (!(leapYear % 4) && !(leapYear % 100) && !(leapYear % 400)) ||
  (!(leapYear % 4) && leapYear % 100)
) {
  outcome = "a Leap Year";
} else {
  outcome = "Not a Leap Year";
}
console.log(`${leapYear} is ${outcome}`);