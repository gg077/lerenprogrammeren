
let leeftijd= prompt('Geef uw leeftijd in:');
let leeftijd= prompt('Wilt uw een volledig bulletin van 12 vakjes spelen?:'){
    if ("yes") prompt(`Kostprijs voor 12 vakjes €20, voor 2 vakjes is het €4, voor 4 is het €8, voor 6 is het €12, voor 8 is het €16 en voor 10 is het €18.`)

if(leeftijd >= "18"){
    console.log(`Je bent ${leeftijd} jaar oud. Je mag deelnemen aan de spelen van de Nationale Loterij.`);
}else if(leeftijd <= "17") {
    console.log(`Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn`);
}



