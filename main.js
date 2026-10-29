/* --> SENHA DO WI-FI DA PADARIA
// Senha do Wi-Fi
const PASSWORD = "pao123"
// Senha digitada pelo usuário
let insert_password
//  Número de tentativas
let attempts = 0

// Enquanto houver 3 tentativas
while (attempts < 3) {    
    
    insert_password = prompt("Digite a senha:")

    // Se for a senha correta
    if (insert_password === PASSWORD){
        alert("Conectado, bom café!")
        // Interrompe a estrutura de repetição
        break
    }

    // Se não for a senha correta
    else {
        alert("Senha inválida!")
    }

    // Se já foram 3 tentativas e a senha não foi correta
    if (attempts === 2){
        alert("Acesso bloqueado!")
    }

    attempts++
}
*/


/* --> CONTAGEM REGRESSIVA - ANO NOVO
// Contador começa com 10 e sofre decrementação
let count = 10

// Enquanto o contador for maior que 0
while (count > 0){
    // Exibe a contagem regressiva a cada repetição, parando no 1
    alert(count)
    count--
}

alert("Feliz Ano Novo!")
*/


/* --> COMPRA DA BICICLETA DE R$ 300,00
// Contador das semanas
let week = 0
// Valor total em reais
let val_total = 0
// Valor ganho na semana
let val_gained = 0

// Enquanto o valor total for menor que R$ 300,00
while (val_total < 300){

    val_gained = Number(prompt("Digite o valor ganho:"))

    // Se o valor ganho for maior que 0, os cálculos são feitos
    if (val_gained > 0){
        // Soma o valor ganho ao valor total
        val_total = val_total + val_gained
        alert(`Valor total: R$ ${val_total}.`)
        // +1 semana acumulando dinheiro
        week++
    }

    // Se o valor ganho for menor ou igual a 0
    else {
        alert("ERRO: Digite um valor maior que zero (0).")
    }
}

alert(`A bicicleta pode ser comprada!\nQuantidade de semanas: ${week}.`)
*/


/* --> QUANTIDADE DE BALAS NO POTE
// Quantidade de balas
const TRUE_NUM = 23
// Quantidade digitada pelo cliente
let num_client = 0
// Número de tentativas
let attempts = 0

// Enquanto a quantidade digitada pelo cliente for diferente da quantidade real
while (num_client !== TRUE_NUM){

    num_client = Number(prompt("Digite a quantidade de balas:"))
    // Cliente digitou uma quantidade -> +1 tentativa
    attempts++

    // Se o cliente acertou a quantidade
    if (num_client === TRUE_NUM){
        alert(`Acertou!\n Quantidade de Tentativas: ${attempts}`)
        // Interrompe estrutura de repetição
        break
    }

    // Se o cliente não acertou
    else {
        
        // Se o cliente digitou um valor fora do intervalo de 1 a 50
        if (num_client < 1 || num_client > 50) {
            alert("A quantidade de balas fica entre 1 e 50.\n Digite um valor válido.")
        }
        // Se o cliente digitou um valor dentro do intervalo
        else {

            // Se o cliente digitou um valor menor que a quantidade real
            if (num_client < TRUE_NUM){
                alert("A quantidade de balas é maior que o valor digitado.")
            }

            // Se o cliente digitou um valor maior que a quantidade real
            else {
                alert("A quantidade de balas é menor que o valor digitado.")
            }
        }
    }
}
*/