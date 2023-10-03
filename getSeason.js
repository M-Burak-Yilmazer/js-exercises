//*GET SEASON CHECKER
let month = +prompt("enter a month value: between 1-12");

let day = +prompt("enter a day value: between 1-31");
let season;

if (month < 1 || month > 12 || day < 1 || day > 31) {
  alert("Please enter a valid value");
}
if ((month == 2 && day >= 21) || (month < 6 && month > 2)) {
  season = "Spring";
} else if ((6 <= month && month <= 8) || (month == 9 && day <= 21)) {
  season = "Summer";
} else if (
  (month == 9 && day >= 22) ||
  (month < 12 && month > 9) ||
  (month == 12 && day <= 20)
) {
  season = "Fall";
} else {
  season = "Winter";
}

console.log(`The season ${month}/${day} is ${season}`);
