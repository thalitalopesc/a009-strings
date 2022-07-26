const string = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"";
const trocaCor = string.replaceAll("verde", "rosa") 
const novaString = trocaCor.replaceAll("azul", "laranja")

/* console.log(`A nova string possui verde e laranja? ${novaString.includes("verde", "laranja")}`) 
Dá para verificar no .includes() se tem mais de um de uma vez*/

console.log(`A nova string possui verde? ${novaString.includes("verde")}`)
console.log(`A nova string possui laranja? ${novaString.includes("laranja")}` )

const fraseDoGato = " mas não deixe o gato sair\""
const stringFinal = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS," + fraseDoGato.toUpperCase()

console.log(stringFinal)