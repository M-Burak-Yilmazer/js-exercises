//
const input = [1, 5, 6, -6];
let result = input.reduce((a, c) => {
  if (c > 0) {
    return a + c;
  }
  return a;
}, 0);
console.log(result)