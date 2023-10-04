console.log("---------Exercise Level 1--------------");
let challenge = "30 Days of JavaScript";
console.log(challenge);
console.log(challenge.length);
let upper = challenge.toUpperCase();
console.log(upper);
let down = challenge.toLowerCase();
console.log(down);
console.log(challenge.substring(0, 2));
console.log(challenge.substring(3));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));
let arr = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(arr.split(", "));
challenge1 = challenge.replace("JavaScript", "Python");
console.log(challenge1);
console.log(challenge.charAt(15));

console.log(challenge.indexOf("a"));
let sent =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sent.indexOf("because"));
console.log(sent.lastIndexOf("because"));
console.log(sent.search("because"));
let mani = " 30 Days Of JavaScript ".trim();
console.log(mani);
console.log(challenge.startsWith(30));
console.log(challenge.endsWith("Script"));
let pattern = /a/gi;
console.log(challenge.match(pattern));
let con = "30 Days of".concat(" ", "JavaScript");
console.log(con);
console.log(challenge.repeat(2));

console.log("---------Exercise Level 2--------------");

console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);
console.log(typeof 10 === typeof "10");
console.log(typeof 10 === typeof parseInt("10"));
console.log(10 == parseFloat("9.8"));
console.log(10 == Math.ceil(parseFloat("9.8")));
let kod1 = "python";
let kod2 = "jargon";
console.log(kod1, kod2.includes("on"));
console.log("python".includes("on"), "jargon".includes("on"));

let randomNumb = Math.floor(Math.random() * 101);
console.log(randomNumb);
let randomNumb2 = Math.floor(Math.random() * 51) + 50;
console.log(randomNumb2);

let js = "JavaScript";
let len = js.length;
let randomLetter = js[Math.floor(Math.random() * len)];
console.log(randomLetter);
console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125 ");
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));
console.log(sentence.lastIndexOf("is"));
console.log(sentence.substring(31, 55));

console.log("---------Exercise Level 3--------------");
let str =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let pat = /love/gi;
let strLove = str.match(pat).length;
console.log(strLove);
let str2 =
  "You cannot end a sentence with because because because is a conjunction";
let patt = /because/gi;
console.log(str2.match(patt).length);

let sentence3 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
// sentence3 = sentence3.replace(/@|#|%|&|$/gi, "");  
// sentence3 = sentence3.replace(/[^\w\s]/gi, "");replaceAll("$", "")
sentence3 = sentence3.replace(/@|#|%|&/gi, "").replaceAll("$", "")
console.log(sentence3)
let income =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
  let money = income.match(/\d+/g)
  console.log(money)
  let annualMoney = +(12*money[0])+ +(money[1]) + Number(12*money[2])
  console.log(annualMoney)
