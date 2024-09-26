// is het jaartal schikkeljaar ofniet, is het deelbaar door 4 maar niet door 100 behalve als het deelbaar is door 400

let jaar = parseInt(prompt("geef een schirkkeljaar"));

if ((jaar%4 == 0 && jaar%100 !== 0) || (jaar % 400 === 0)){
    console.log(`${jaar}is geen schrikkeljaar`)
}







// || = OR, je kan bijde typen