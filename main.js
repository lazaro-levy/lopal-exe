/*
const PASSWORD = "pao123"
let i
*/

/*
let count = 10

while (count > 0){
    alert(count)
}

alert("Feliz Ano Novo!")
*/

/*
let week = 0
let val_total = 0
let val_gained = 0

while (val_total < 300){

    val_gained = Number(prompt("Digite o valor ganho: "))

    if (val_gained > 0){
        val_total = val_total + val_gained
        alert(`Valor total: R$ ${val_total}.`)
        week++
    }
    else {
        alert("ERRO: Digite um valor maior que zero (0).")
    }
}

alert(`A bicicleta pode ser comprada!\nQuantidade de semanas: ${week}.`)
*/


const TRUE_NUM = 23
let num_client = 0
let attempts = 0

while (num_client !== TRUE_NUM){

    num_client = Number(prompt("Digite a quantidade de balas: "))
    attempts++

    if (num_client === TRUE_NUM){
        alert(`Acertou!\n Quantidade de Tentativas: ${attempts}`)
    }
    if (num_client < 1 || num_client > 50) {
        alert("A quantidade de balas fica entre 1 e 50.\n Digite um valor válido.")
    }
}