// Write a JavaScript function called reverseWordsWithoutArray that takes a sentence as input and returns
// the sentence with its words reversed, without using arrays:
// This JavaScript code challenge involves reversing the words in a given sentence without using arrays. It's a
// practical exercise that combines string manipulation, loops, and functions.
// Expected Outputs :
// For example, if the input is Hello Js World 2023, the function should return "2023 World Js Hello".







let j;
let reversedWord = "";

function reverseWordsWithoutArray(word) {
  for (let i = String(word).length - 1; i >= 0; i--) {
    j = word[i];
    reversedWord += j;
  }
  return console.log(reversedWord);
}

reverseWordsWithoutArray("Hello Js World 2023");

// console.log("Hello Js World 2023".split(" ").length);

// let john = "Hello Js World 2023".split(" ");
// console.log(john[2]);

let k;
let reverse = " ";

function reverseSentence(word) {
  for (let i = word.split(" ").length - 1; i >= 0; i--) {
    k = word.split(" ")[i];
    // console.log(k)
    reverse += k + " ";
    // console.log(reverse)
  }
  return console.log(reverse);
}
reverseSentence("Hello Js World 2023");


function tersCevir(cumle) {
    
  let kelimeBaslangic = 0;

  let tersCumle = "";

  for (let i = 0; i <= cumle.length; i++) {

    if (cumle[i] === " " || i === cumle.length) {

      let kelimeSonu = i - 1;
      let kelimem = "";

      for (let j = kelimeBaslangic; j <= kelimeSonu; j++) {
        kelimem += cumle[j];
      }

      tersCumle = kelimem + " " + tersCumle;

      kelimeBaslangic = i + 1;
    }
  }
  return tersCumle;
}

let cumle = "Hello Js World 2023";
console.log(tersCevir(cumle));