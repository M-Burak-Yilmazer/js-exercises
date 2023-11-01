let word = "kare";

console.log(word.slice(0, 1));
console.log(word.slice(0, 2));
console.log(word.slice(0, 3));
console.log(word.slice(1, 3));
console.log(word.slice(2, 3));
console.log("-------");

// const arr = []
// for (let j = 0; j < word.length; j++) {
//   for (let index = 1; index <= word.length; index++) {
//     if (index > j) arr.push(word.slice(j, index));
//   }
// }
// console.log(arr.join(","))

let str = "dog";

const combiner = (str) => {
  const arr = [];
  for (let i = 1; i <= str.length; i++) {
    arr.push(str.slice(0, i));
  }
  for (let j = 1; j < str.length; j++) {
    arr.push(str.slice(j, str.length));
  }
  return arr.join();
};

console.log(combiner(str));
console.log(combiner("kare"));
// a = "dog";
// function combs(str) {
//   let l = str.length;
//   let result = [];
//   for (let i = 0; i < l; i++) {
//     for (let j = 1; j <= l; j++) {
//       if (j > i) result.push(str.substring(i, j));
//     }
//   }
//   return result;
// }
// console.log(combs(a));

let input = [1, 2, 3, 4, 5];

const findTargetParts = (array, targetNumber) => {
  return array.reduce((sum, item, indis, array) => {
    let rest = targetNumber - item;
    if (rest == item) {
      return sum;
    }

    let otherRest = array.filter((item) => item == rest);

    if (otherRest.length) {
      if (!sum) {
        sum = [];
        sum.push(array.indexOf(...otherRest));
      } else {
        sum.push(array.indexOf(...otherRest));
      }
    }

    return sum;
  }, null);
};

const numbers = [2, 5, 9, 4, 3, 6];
console.log(findTargetParts(input, 9));

// let restler = input.reduce((sum, item, indis, array) => {
//   let rest = targetNumber - item;
//   let kalan = array.filter((item) => item == rest);
//   kalan.length ? sum.push(array.indexOf(...kalan)) : sum;

//   return sum;
// }, []);
// console.log(restler);

// *if first dice is 1 and second dice is 6, output should be 'one - six'
// *For example :
// *call this function with dices(10) Yo should display all 10 result.
// * And display the result in the following format on the console:
// * for Example:
// * 1st dice: 2 2nd dice: 3 output => 'two' - 'three'
// * 1st dice: 6 2nd dice: 4 output => 'four' - 'six' // Always dsiplay the low dice first.
