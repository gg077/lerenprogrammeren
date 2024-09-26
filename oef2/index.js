// let, var, const
// let blockscope, var universeel, const is een vaste waarde


//DATATYPEs
let getal= 5; //de output za  l dus een number zijn
let tekst= "Tom";
let keuze=1; // 1 = treu, 0 = false //BOOLEAN!!


let strNum = "123";
strNum = parseInt(strNum); //kommagetallen = parsefloat

let strNum1= "123";
strNum1 = parseInt(strNum1);

let resultaat = strNum+strNum1
    console.log(typeof(resultaat));

let person = {
    name:"Jane",
    age:30,
    isStudent: false,
}

console.log(typeof(person));
console.log(person.name);

let familieNaam = "Vanhoutte";
let geboortejaar = 1974;
let huidigejaar = 2024;
var result1 = huidigejaar -geboortejaar;
console.log(result1);

//het resultaat van vanhoutte is 50 jaar

// het resultaat van familienaam is 50 jaar

// het resultaat van familienaam is resultaat

console.log("het resultaat van " , familieNaam , "is" , resultaat);

//ES6 Notatie (backtick operator)



let oefening1c = "+";
let oefening1a = 3;
let oefening1b = 2;
var result=oefening1a +oefening1b;
console.log("het result van" , oefening1a , oefening1c , oefening1b , "is" , result);


console.log(5=="5"); // treu
console.log(5==="5"); // false

