const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const semEspaco = minhaString.trim()

console.log(`A quantidade de caracteres na string antes da remoção era ${minhaString.length}. Agora, a quantidade de caracteres é ${semEspaco.length}`)

const semTracos = semEspaco.replace("________", "sticioso")

console.log(semTracos)