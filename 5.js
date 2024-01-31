// Capitalize Every first Letter of each word in a String

const letter="our country name is bangladesh";
const newArray=[]
let letterCap=letter.split(" ");
// console.log(letterCap)

for(let x=0;x<letterCap.length;x++){
const word=letterCap[x];
const wordsplit=word.split('');
const firstWord=wordsplit.shift('');
wordsplit.unshift(firstWord.toUpperCase())
newArray.push(wordsplit.join(''))
}
console.log(newArray)