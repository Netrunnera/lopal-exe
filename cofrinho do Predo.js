let total = Number(prompt("Quanto o Pedro tem no cofrinho?"));
let semanas = 0;
let ganho = 0;

while (total < 300) {
    ganho = Number(prompt("Quanto o Pedro ganhou nesta semana?"));

    if (ganho > 0) {
        total = total + ganho;
        semanas = semanas + 1;

        if (total < 300) {
            alert("Ainda faltam R$ " + (300 - total) + " para comprar a bicicleta!");
        } else {
            alert("Parabéns! Você ajudou Pedro a comprar uma bicicleta!");
            alert("Ele conseguiu em " + semanas + " semanas.");
        }
    } else {
        alert("Digite um valor maior que zero!");
    }
}
