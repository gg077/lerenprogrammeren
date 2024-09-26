let getal1 = 10;
let getal2 = 20;
if(getal1 > getal2){
    //console.log("getal1 is groter dan getal2");
    console.log(`${getal1} is groter dan ${getal2}`)
}else{
    //console.log("getal2 is groter dan getal1");
    console.log(`${getal2} is groter dan ${getal1}`)
}

// selectie, er wordt een keuze gemaakt gebaseerd op een logische instelling

let leeftijd = parseInt(prompt('voer je leeftijd in:'));
if(leeftijd >= 18 ){
    console.log("je bent een volwassene");
}else if(leeftijd >= 10){

}else{
    console.log("kind");
}