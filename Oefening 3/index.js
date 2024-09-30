let a = parseInt(prompt("geef getal"))
let b = parseInt(prompt("geef getal"))
let c = parseInt(prompt("geef getal"))

if (a>=b && a>=c){
    if (b>=c){
        console.log(`${a} dan ${b} dan pas ${c}`)
    }if (b<=c){
        console.log(`${a} dan ${c} dan pas ${b}`)
    }
}else if (b>=a && b>=c){
    if (a>=c){
        console.log(`${b} dan ${a} dan pas ${c}`)
    }if (c>=a){
        console.log(`${b} dan ${c} dan pas ${a}`)
    }
}else if (c>=a && c>=b){
    if (b>a){
        console.log(`${c} dan ${b} dan pas ${a}`)
    }if (a>b){
        console.log(`${c} dan ${a} dan pas ${b}`)
    }
}