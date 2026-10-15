//Minha solução
conta = parseFloat(prompt('Digita o valor a pagar: '))

const Cgorjeta  = 0.2

valorGorjeta = conta * Cgorjeta

totalApagar = conta + valorGorjeta

console.log(totalApagar.toFixed(2))
console.log(valorGorjeta.toFixed(2))


//solução do professora

let valorConta = 0
let valorGorjeta = 0
let valorTotal = 0

valorConta = parseFloat(prompt('Digite o valor da conta: '))
valorGorjeta = parseFloat(prompt('Digite a gorjeta (decimal)% '))

gorjeta = (valorConta * valorGorjeta) / 100

valorTotal = valorConta + gorjeta

//ou 
//valorTotal += valorConta
//valorTotal += (valorConta*valorGorjeta)/100