// Count how many times a string has the letter a or A

const fullName="Afsar mahud rAhat";
let sum=0;
for(let i=0;i<fullName.length;i++){

    if((fullName[i]==='a')||(fullName[i]==="A")){

        sum++
    }

}console.log(sum)