//Utils
/**
 * @param {any} value 
 * @param {string} type 
 * @returns true if type doesn't match the type
 */
const isNotType = (value, type) => {
    if(typeof value != type){
        alert(`Digite um ${type}`)
        return true
    }
    return false
}

/*1. Soma de Dois Números
Descrição:
Peça ao usuário dois números e exiba a soma deles.
Tarefas:
Crie uma função soma que receba dois números como parâmetros.
Exiba o resultado no console ou em um alert.
*/
const sumFun =  (a , b) => {
    if(isNotType(a, 'number') || isNotType(b, 'number'))return

    return (parseFloat(a) + parseFloat(b)).toFixed(2)
}
/*
2. Verificação de Par ou Ímpar
Descrição:
Peça ao usuário um número e diga se ele é par ou ímpar.
Tarefas:
Crie uma função que receba um número.
Verifique se o número é divisível por 2.
Exiba no console "O número é par" ou "O número é ímpar".
*/
const oddFun = (num) => {
    if(isNotType(num, 'number'))return
    
    return parseInt(num) & 1
}

const oddOrEvenFun = (num) => {
    if(isNotType(num, 'number'))return


    if(oddFun(parseInt(num))){
        console.log('O número é Ímpar')
        return
    }
    console.log('O número é Par')
}

/*
3. Contagem de Números
Descrição:
Exiba os números de 1 a 10 usando um loop.
Tarefas:
Utilize um loop for para imprimir os números no console.
Modifique o exercício para usar um while.
*/
const countFun = () => {
    let num = 11

    while(--num){
        console.log(num)
    }
}
/*
4. Tabuada de um Número
Descrição:
Crie uma tabuada para um número informado pelo usuário.
Tarefas:
Peça ao usuário um número.
Use um loop for para multiplicar o número de 1 a 10.
Exiba o resultado no console.
*/
const tabuadaFun = (num) => {
    if(isNotType(num, 'number'))return
    if(parseInt(num) < 0 )alert('Digite um número maior que zero')

    for(let i = 1; i < 11; i++){
        console.log(`${num} x ${i} = ${num * i}`)
    }
}

/*
5. Encontrar o Maior Número em uma Lista
Descrição:
Dado um array de números, encontre o maior valor.
Tarefas:
Crie um array como [3, 7, 2, 9, 5].
Use um loop para comparar os números e encontrar o maior.
Exiba o maior número no console.
*/
const maxFun = (num) => {
    if(!Array.isArray(num)){
        console.log('Insira um array')
        return
    }
    
    let max = -Infinity

    for(let i = 0; i < num.length; i++){
        if(isNotType(num[i], 'number'))return

        if(parseFloat(num[i]) > max)
            max = num[i]
    }
    return max
}

/*
6. Inverter uma Palavra
Descrição:
Peça ao usuário uma palavra e exiba-a invertida.
Tarefas:
Crie uma função que receba uma string.
Converta a string para um array com o método split.
Inverta a ordem com o método reverse e transforme novamente em string com join.
*/
/**
 * 
 * @param {string} word 
 * @returns 
 */
const invertFun = (word) => {
    if(isNotType(word, 'string'))return

    let arr = word.split('')

    //console.log('antes',  arr)
    arr.reverse()
    console.log(arr.join(''))
}
/*
7. Soma de Elementos de um Array
Descrição:
Calcule a soma dos elementos de um array.
Tarefas:
Crie um array como [1, 2, 3, 4, 5].
Use um loop ou o método reduce para somar os valores.
Exiba o resultado no console.
*/
const sumArrayFun = (num) => {
    if(!Array.isArray(num)){
        console.log('Insira um array')
        return
    }
    let sum = 0

    for(let i = 0; i < num.length; i++){
        if(isNotType(num[i], 'number'))return

        sum += parseFloat(num[i])
    }
    return sum
}

/*
8. Número Primo
Descrição:
Verifique se um número informado pelo usuário é primo.
Tarefas:
Crie uma função que receba um número.
Verifique se ele é divisível apenas por 1 e por ele mesmo.
Exiba "É primo" ou "Não é primo".
*/
const primeFun = (num) => {
    if(isNotType(num, 'number'))return
    if(parseInt(num) < 2 )alert('Digite um número maior que 1')

    if(oddFun(num)){
        for(let i = 3; i * i <= num; i += 2){
            if(!(num % i))return false
        }
        return true
    }
    if(num == 2)return true
    return false
}
function testPrime(){
    for(let i = 3; i < 10000; i += 2){
        const is = primeFun(i)
        is && console.log(`-${i}-`)
    }
        
}

/*
9. Fatorial de um Número
Descrição:
Calcule o fatorial de um número informado pelo usuário.
Tarefas:
Crie uma função que receba um número.
Use um loop para multiplicar os números de 1 até o número informado.
Exiba o resultado no console.
*/
const FactorialFun = (num) => {
    if(isNotType(num, 'number'))return
    if(parseInt(num) < 2 )alert('Digite um número maior que 1')


    let fat = 1n
    for(let i = 2n; i <= num; i++){
        fat *= i
    }   
    return fat
}


/*
10. Verificar Palíndromo
Descrição:
Verifique se uma palavra informada pelo usuário é um palíndromo (lê-se igual de trás para frente).
Tarefas:
Crie uma função que receba uma string.
Inverta a string e compare com o original.
Exiba no console se a palavra é ou não um palíndromo.
*/
const palimFun = (word) => {
    if(isNotType(word, 'string'))return

    /**
     * @type string[]
     */
    let arr = word.split('')

    //console.log('antes',  arr)
    let is
    const len = arr.length
    for(let i = 0; i < len; i++){
        if(arr[i].toLowerCase() != arr[(len - 1) - i].toLowerCase()){
            console.log('não um palíndromo')
            return false
        }
        console.log('é um palíndromo')
        return true
    }
}
/*
11. Contar Vogais em uma Frase
Descrição:
Dada uma frase, conte o número de vogais.
Tarefas:
Peça ao usuário uma frase.
Use um loop para verificar cada caractere.
Conte as vogais (a, e, i, o, u) e exiba o total.
*/
/**
 * 
 * @param {string} word 
 * @returns 
 */
const vogalFun = (word) => {
    if(isNotType(word, 'string'))return
    
    let sum = 0
    for(let i = 0; i < word.length; i++){
        if(isVow(word.charAt(i)))sum++
    }
    console.log(sum)
}

/**
 * 
 * @param {string} c 
 */
const isVow = (c) => {
    switch (c) {
        case 'a':
            return true
        case 'e':
            return true
        case 'i':
            return true
        case 'o':
            return true
        case 'u':
            return true
        default:
            return false
    }
}


/*
12. Gerar Números Aleatórios
Descrição:
Gere um número aleatório entre 1 e 100.
Tarefas:
Use a função Math.random e ajuste o intervalo para 1 a 100.
Exiba o número gerado no console.
*/

const RandomFun = () => {
    return Math.floor(Math.random() * 101)
}

/*
13. Substituir Números Negativos por Zero
Descrição:
Dado um array de números, substitua todos os números negativos por zero.
Tarefas:
Crie um array como [4, -3, 2, -1, 0].
Use um loop para verificar cada número.
Substitua os números negativos por 0 e exiba o array no console.
*/

/*
14. Verificar Palavras Proibidas em um Texto
Descrição:
Verifique se uma frase contém palavras proibidas.
Tarefas:
Crie um array de palavras proibidas como ['palavra1', 'palavra2'].
Peça ao usuário uma frase.
Verifique se a frase contém alguma palavra do array e exiba uma mensagem de alerta.
*/

/*
15. Gerar uma Lista de Números Pares
Descrição:
Crie uma lista de números pares entre 1 e 20.
Tarefas:
Use um loop para gerar os números pares.
Adicione os números a um array e exiba-o no console.
*/