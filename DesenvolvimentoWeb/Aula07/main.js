// Tem que declarar as variaveis antes.
let celsius = 0
let fahrenheit = 0

//paserFloat -> função que conver o imput em float.
//função prompt é um campo de digitação.
celsius = parseFloat(prompt('Digite a temperatura em Graus Celsius: '))

fahrenheit = celsius * 1.8 + 32

//alert esta devolvendo o valor em um popup.
// função .tofixe esta falando quantas casas depois da virgula
alert('A temperatua em fahrenheit é ' + fahrenheit.toFixed(2)) 