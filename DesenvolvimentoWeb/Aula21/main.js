
//Toda ação de clique é salva aqui
let checkButton = document.getElementById('check-button')
//armazenando a variavel do input
let ageInput = document.getElementById('age-input')
    
//Esta pegando a variavel checkButton e adiconando um evento de escuta que é o 'click'
//após o click e ele executa a função.
//lembre-se o click esta sendo armazenado com document.getElementById('check-button')
checkButton.addEventListener('click', function(){
    // age esta pegando o valor de agInput
    let age = ageInput.value 
    // message esta dando uma condição
    // ? operador ternario | condicao ? valorSeVerdadeiro : valorSeFalso
    let message = (age >= 18) ? 'You are and adult' : 'You are not and adult'
    // vai voltar uma das mensagens.
    alert(message)
})
