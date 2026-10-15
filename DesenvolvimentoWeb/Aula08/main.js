// Esta foi miha solução.

//Declarei a variavel
let nota = 0
//converti a variavel em float e criei um campo para digitar
nota = parseFloat(prompt('Digite a nota do aluno: '))


// iff ou else -> o && conferir uma ou mais condições são verdadeiras.
if (nota >= 90 && nota <= 100){
    console.log('Nota do alugo é A')
}
else if (nota >= 80 && nota <= 89){
    console.log('Nota do alugo é B')
}
else if (nota >= 70 && nota <= 79){
    console.log('Nota do alugo é C')
}
else if (nota >= 60 && nota <= 69){
    console.log('Nota do alugo é D')
}
else{
    console.log('Nota do aluno é F')
}



//Solução do Professor
//apenas pediu para digitar
let grade = prompt('Digite a nota do aluno: ')

//Para não deixar digitar valor maior que 100.
if (grade > 100){
    alert('Nota invalida')
}
else if (grade >= 90){
    alert('Aluno nota A')
}
else if (grade >= 80){
    alert('Aluno nota B')
}
else if (grade >= 70){
    alert('Aluno nota C')
}
else if (grade >= 60){
    alert('Aluno nota D')
}
else {
    alert('Aluno nota F')
}