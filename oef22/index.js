
let hoeveelgetallen = parseInt(prompt("hoeveel getallen"));
let getal;
let i=0
let som=0
let output = "";

for (let i = 1; i<=hoeveelgetallen;i++){
    getal = parseInt(prompt(`geef getal een in`))
    som = som +getal;
    if (getal < 0){
        break
        output = output + `${getal},`;
    }
}
console.log(som);