
let hoeveelgetallen = parseInt(prompt("hoeveel getallen"));
let getal;
let i=1
let som=0

for (let i = 1; i<=hoeveelgetallen;i++){
    getal = parseInt(prompt(`geef getal ${i} in`))
    som = som +getal;
}
console.log(som);