let totaal = 0; // Begin met een totaal van 0

console.log("Even getallen van 0 tot 100:");

// Loop door de even getallen
for (let i = 0; i <= 100; i += 2) {
    console.log(i);          // Print het even getal
    totaal = totaal + i;     // Voeg het even getal toe aan totaal
}

console.log("De som van alle even getallen van 0 tot 100 is:", totaal); // Print de totale som