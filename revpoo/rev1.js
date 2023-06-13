const leia = require("prompt-sync")()




//arrays e vetores

let equipes = ['SFC','SPFC','SCCP','SEP']

let pontos = [0,0,0,0]




for(let x=0;x<equipes.length;x++){

    console.log(equipes[x])

    pontos[x] = parseInt(leia("Digite quantos pontos esse time tem: "))

}

console.log("Tabela")

console.log("TIME\tPONTOS")

for(let x=0;x<=equipes.length;x++){

    console.log(equipes[x]+'\t'+pontos[x])

}
