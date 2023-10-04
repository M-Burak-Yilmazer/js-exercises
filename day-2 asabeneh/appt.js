// // let sayi = prompt("Lutfen bir yil giriniz");
// // if (sayi % 4 == 0 && sayi % 100 == 0 && sayi % 400 == 0) {
// //   alert(`${sayi} artık bir yıldır.`);
// // } else if (sayi % 4 !== 0) {
// //   alert(`${sayi} artık bir yıl değildir.`);
// // } else if (sayi % 4 == 0 && sayi % 100 !== 0) {
// //   alert(`${sayi} artık bir yıldır.`);
// // } else {
// //   alert(`${sayi} artık bir yıl değildir.`);
// }

let numb = prompt("Lutfen bir yil giriniz");
if (numb % 4 == 0) {
  if (numb % 100 != 0) {
    alert(`${numb} artik bir yildir.`);
  } else if (numb % 400 == 0) {
    alert(`${numb} artik bir yildir.`);
  } else {
    alert(`${numb} artik bir yil değildir.`);
  }
} else {
  alert(`${numb} artik bir yil değildir.`);
}
