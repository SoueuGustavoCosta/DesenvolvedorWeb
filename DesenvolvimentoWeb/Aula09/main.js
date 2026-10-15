//minha solução
let idade = prompt('Digite sua idade: ')
let titulo = prompt('Possui titulo (sim/não) ')

//Não coloquei entre aspas simples o sim '', ai deu erro.
if(idade >= 18 && titulo == 'sim'){
    console.log('Você pode votar')
}

else if (idade >= 18 && titulo == 'não'){
    console.log('Você não pode votar')
}
else if (idade <= 18 && titulo == 'sim'){
    console.log('Você não tem idade mínima para votar')
}
else{
    console.log('Você não pode votar')
}


// solução do professor
let age = prompt('Digite sua idade: ')
let temTitulo = prompt('Possui titulo (sim/não) ')
let idadeMinima = 18

if (age >= idadeMinima && temTitulo == 'sim'){
    console.log('Você pode votar')
}
else if (age >= idadeMinima && temTitulo == 'não'){
    console.log('Você precisa de um titulo para votar')
}
else if (age < idadeMinima && temTitulo =='sim' || temTitulo == 'não'){
    console.log('Você não tem idade minima para votar')
}
else{
    console.log('não pode votar')
}