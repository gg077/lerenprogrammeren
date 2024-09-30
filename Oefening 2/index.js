//let i = parseInt(prompt("raad het getal"));
//switch (treu) {
//    case (i <= 4):
//        console.log(`Het getal ${i} is te klein`)
//        break;
//    case (i < 10):
//        if (i <= 4)
//            console.log (`Het getal ${i} is te klein`)
//        else (i = 5)
//        console.log(i)
//        break;
//    default (i = 5)
//        console.log(i)
//}

//let eindgetal = 7
//let ingevoerdegetal = parseInt(prompt("getal?"))
//
//while (eindgetal!==ingevoerdegetal){
//    if (eindgetal<ingevoerdegetal)
//        console.log("groter")
//    else
//}

// dit werkt maar is niet juiste manier
//let i = parseInt(prompt("geef een getal"))
//let r = 2
//console.log(1)
//while (r <=i){
//    r = r*r
//    console.log(r)
//}

let grens = parseInt(prompt("voer een getal"));
let getal = 1

while(getal <= grens){
    console.log(getal);
    if(getal === 1){
        getal = getal * 4;
    }else{
        getal = getal ** 2;
    }

}
