let getal = parseInt(prompt("geef een getal in"));
let output = "";

for(let i=1;i<=getal;i = i * 2){
    if(i * 2 < getal){
        output = output + `${i},`
    }else{
        output = output + `${i},`
    }
}
console.log(output)