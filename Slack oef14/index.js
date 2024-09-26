let getal = parseInt(prompt("Geef een nummer"));
let totaal = 0;

for (let i = 1; i <= 100; i++) { // Begin i bij 1 en verhoog met 1
    if (getal * i <= 100) { // Controleer of het veelvoud ≤ 100 is
        totaal = getal * i; // Bereken het veelvoud
        console.log(totaal); // Print het veelvoud
    }
}
