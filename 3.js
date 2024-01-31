// Check whether a string contains all the vowels a, e, i, o, u

const letter='the quick brown fox jumps over the lazy dog';
let sum=0
let x=0;

while(x<=letter.length){
vowel=letter[x];

if((vowel==='a') || (vowel==='e') || (vowel==='i')||(vowel==='o')||(vowel==='u')){

    sum++
}

    
    x++
}console.log(sum);