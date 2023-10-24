//*1 You are given an array of objects representing a collection of products, each with a name, price, and
//*category. Your task is to use map, filter, and reduce to calculate the average price of products in each
//*category, and then return an array of objects containing only the categories that have an average price
//*above 50.1
const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];

products.forEach((pro) => console.log(pro.category));

// const electronics = products.filter(
//   (product) => product.category == "Electronics"
// );
// console.log(electronics);
// const clothes = products.filter((product) => product.category == "Clothes");
// const avgPriceByCategory = (arr) => {
//   return {
//     category:
//     average: arr.reduce((acc, product) => acc + product.price, 0) / arr.length,
//   };
// };
// console.log(avgPriceByCategory(electronics));

// // let elec = [];
// // let clot = [];
// // let clotAve = 0;
// // let elecAve = 0;
// // const average = products.filter((per) => {
// //   per.category == "Electronics" ? elec.push(per.price) : clot.push(per.price);
// //   elecAve = elec.reduce((acc, int, i) => acc + int, 0) / elec.length;
// //   clotAve = clot.reduce((acc, int, i) => acc + int, 0) / clot.length;
// //   if (elecAve > 50 || clotAve > 50) {
// //     return { category: products["category"], average: elecAve };
// //   }
// // });
// // console.log(average);

// // const productsByCategory = products.reduce((acc, product) => {
// //   const category = product.category;
// //   if (!acc[category]) {
// //     acc[category] = [];
// //   }
// //   acc[category].push(product);
// //   return acc;
// // }, {});
// // console.log(productsByCategory);

// // const birleşim = products.reduce((acc,product)=> {
// //     const category = product.category
// // if(!acc[category]){
// //     acc[category ] = [];

// // }
// // acc[]
// // })
