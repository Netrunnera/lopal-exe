alert("Bem-vindo ao jogo!")

let tentativas = 0
let resposta = 7
let chute = Number(prompt("Digite um número entre 1 e 50:"))

whhile (chute < 100) {
    chute++
 

if (chute <1 || chute >50) {
    alert("Número inválido! Digite um número entre 1 e 50.")}
    else {


if (chute === resposta ) {
    alert("Parabéns! Você acertou o número!")
} else if (chute < resposta) {
    alert("O número é maior! Tente novamente.")
} else if (chute > resposta) {
    alert("O número é menor! Tente novamente.")
}}}
 
alert(chute)

