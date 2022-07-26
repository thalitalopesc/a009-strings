const nome = prompt("Qual o seu nome?");
const comidaFavorita1 = prompt("Diga qual a sua comida favorita:")
const comidaFavorita2 = prompt("Diga outra comida favorita:")
const comidaFavorita3 = prompt("Diga sua última comida favorita:")

/* CONCATENAÇÃO
const frase = "Estas são as comidas favoritas de " + nome + ":" + "\n -" + comidaFavorita1 + "\n -" + comidaFavorita2 + "\n -" + comidaFavorita3

console.log(frase) */

const frase2 = `Estas são as comidas favoritas de ${nome}: \n -${comidaFavorita1} \n -${comidaFavorita2} \n -${comidaFavorita3}`

console.log(frase2)