let lengte = parseFloat(prompt("Wat is je lengte"));
let gewicht = parseFloat(prompt("Wat is je gewicht"));
let bmi = gewicht / (lengte * lengte)

if(bmi < 18.50){
    console.log("Ondergewicht");
} else if (18.50 < bmi < 25){
    console.log("Normaal");
}else if (25 < bmi < 30){
    console.log("overgewicht");
}else if (bmi > 30){
    console.log("Obesitas")
}



