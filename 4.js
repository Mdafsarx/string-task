// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

const string="xxxxyyyXXXXklYYYY y"

let string2="";

for(let x=0;x<string.length;x++){

    if(string[x]==='x'){

        string2 +="y"
    }
else if(string[x]==='X'){
    string2 =string2+'Y'
}
else{
    string2=string2+string[x]
}
    
}

// console.log(string2)

let names="afsar mahmud";

names.replace('afsar',"rifat")
console.log(names)
