let colorList = []

for (let i = 1; i <= 3; i++){
   let userColor = prompt('Digite uma cor: ')
    colorList.push(userColor)
}

document.getElementById('colorList').innerHTML = colorList


//alert('Sua lista de cores é: '+ colorList)