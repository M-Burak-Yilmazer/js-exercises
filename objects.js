// const obj = {
//   rabbit: "🥹",
//   year: 1,
// };
// obj["rabbit"] = "🖥️";
// console.log(obj["rabbit"]);

// const obj = new Object();
// obj.rabbit = "👝";
// console.log(obj.rabbit);

// const organ = { dna: Math.random() };

// const objt = Object.create(organ);
// console.log(objt.dna);

// console.log(Object.getPrototypeOf(objt))
const obj = Object.create({});
console.log(obj);
Object.defineProperty(obj, "name", { value: "kaya", enumerable: false });
console.log(obj.prototype);
// const legs = 8;
// const name = "ahmet";

// const object = {
//   name,
//   legs,
// };

// // console.log(object);
