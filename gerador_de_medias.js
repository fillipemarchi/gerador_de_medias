console.log ('SEJA BEM VINDO(A) AO GERADOR DE MÉDIAS!')
let notas = []
let nummed = Number(prompt("Insira a quantidade de valores que deseja ter a média: "))
for (let cont = 1; cont<=nummed; cont++) 
notas[cont] = Number(prompt("Insira o valor "+cont+": ")) 
let soma = notas.reduce((soma, numero)=> soma + numero,0)
let media = soma / nummed
console.log ('Sua média foi de: '+ media.toFixed(1))
