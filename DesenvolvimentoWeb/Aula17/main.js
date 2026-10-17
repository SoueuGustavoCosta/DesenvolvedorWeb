
// criei um função, quando clicar no botão que esta declaro com onclick vai chamar a função.
function changeColor(){
    // declarei uma arrey
    let colors = ['red', 'green', 'yellow', 'pink', 'blue']
    //declarei uma variavel que chama a array e o metodo Math tem uma função random
    // que são numero aleatorios menores que 1 e esta multiplicando os numeros da array length pelo seu comprimento.
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    //documento pega o HTML 
    //esta trocando o fundo do body pela variavel randomColor
    document.body.style.backgroundColor = randomColor

}