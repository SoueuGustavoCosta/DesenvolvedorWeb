//desafio
let fruits = ['Banana', 'Maçã', 'Abacate', 'Kiwi', 'Coco']
let numberList = document.getElementById('numberList')

for (let i = 1; i < 5; i++){
    let listItem = document.createElement('li') 
    listItem.appendChild(document.createTextNode(fruits[i]))
    // listItem.textContent = 'Item' + i 
    numberList.appendChild(listItem) 
}


// declarou uma variavel, e ela pega o elementento e jogo no HMTL com id numberList.
// let numberList = document.getElementById('numberList')

// // loop vai girar 5 vezes.
// for (let i = 1; i <= 5; i++){
//     let listItem = document.createElement('li') // declarou uma variavel, e ela cria um li no html
//     listItem.textContent = 'Item' + i // Esta alterando o conteudo do texto adicionando item + variavel i
//     numberList.appendChild(listItem) // a variavel
// }

// tentei resolver
// let lista = []

// for (let i = 1; i <= 5; i++){
//    let itensLista = prompt('Digite os itens da lista '+ i +'.' )
//    lista.push(itensLista)
// }

// document.getElementById('numberList').innerHTML = lista