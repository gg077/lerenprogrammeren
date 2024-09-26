let aantalproducten = parseInt(prompt("geef het aantal in"));
let prijsperproduct = parseFloat(prompt("geef de prijs in"));
let totaleprijs = aantalproducten * prijsperproduct;
let korting = 0;

if (totaleprijs > 100){
    korting = totaleprijs * 0.10;
    totaleprijs = totaleprijs - korting
}else if (totaleprijs >= 50 &&  totaleprijs <= 100){
    korting = totaleprijs * 0.05;
}

    console.log(`op €${totaleprijs} geld er geen korting`)



console.log("Het totale bedrag is: €" + totaleprijs.toFixed(2));5