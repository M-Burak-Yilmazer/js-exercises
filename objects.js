// // const obj = {
// //   rabbit: "🥹",
// //   year: 1,
// // };
// // obj["rabbit"] = "🖥️";
// // console.log(obj["rabbit"]);

// // const obj = new Object();
// // obj.rabbit = "👝";
// // console.log(obj.rabbit);

// // const organ = { dna: Math.random() };

// // const objt = Object.create(organ);
// // console.log(objt.dna);

// // console.log(Object.getPrototypeOf(objt))
// const obj = {
//   name: "ahmet",
//   age: 33,
//   lastname: true,
//   fullname() {
//     console.log(this.name);
//   },
// };
// console.log(obj);
// // const legs = 8;
// // const name = "ahmet";

// // const object = {
// //   name,
// //   legs,
// // };
// obj.fullname();

// // // console.log(object);

function Person(name, surname, birth) {
  this.name = name;
  this.surname = surname;
  this.birth = birth;
  this.fullname = function () {
    return this.name + " " + this.surname;
  };
  this.getAge = function () {
    return new Date().getFullYear() - birth;
  };
}
const burak = new Person("Burak", "Kaya", 1990);
console.log(burak );
console.log(burak.getAge());
console.log(burak.fullname());
