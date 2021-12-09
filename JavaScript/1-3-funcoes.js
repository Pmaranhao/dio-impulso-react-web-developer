/*Função*/
console.log("Função");
const nome = function(string) {
    return string;
}
console.log(nome("Pedro\n"));
/*--------------------------------------------------------------------------------- */

/* Função Anônima*/
console.log("Função Anônima");
const soma = function(a,b) {
    return a + b;
}
console.log(soma(2,2));
console.log(soma(6,2));
console.log("\n");
/*--------------------------------------------------------------------------------- */

/*Função autoinvocável*/
console.log("Função autoinvocável");
const soma2 = (
function(a, b) {
    return a + b;
}
)(1,2);
console.log(soma2 + "\n");
/*--------------------------------------------------------------------------------- */

/*Callbacks*/
console.log("Callbacks");
const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const soma3 = function(num1, num2){
    return num1 + num2;
}

const sub = function(num1, num2){
    return num1 - num2;
}

const resultSoma = calc(soma3, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSoma);
console.log(resultSub + "\n");
/*--------------------------------------------------------------------------------- */

/* Parâmetros */
console.log("Valores padrão");
function exponencial(array, num = 1){
    const result = [];

    for(let i = 0; i < array.length; i++){
        result.push(array[i]** num)
    }
    return result
}
console.log(exponencial([1, 2, 3, 4]));
console.log(exponencial([1, 2, 3, 4], 4));
console.log("\n");
/*--------------------------------------------------------------------------------- */

console.log("Argments");
function findMax() {
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log(findMax(1, 2, 3, 6, 90, 1) + "\n");
/*--------------------------------------------------------------------------------- */

/*Arrays */
console.log("Spread");
function sum(x, y, z){
    return x + y + z; 
}

const numbers = [1, 2, 3];
console.log(sum(...numbers) + "\n");
/*--------------------------------------------------------------------------------- */
console.log("Rest");
function confereTamanho(...args){
    console.log(args.length);
}

confereTamanho();
confereTamanho(1, 2);
confereTamanho(3, 4, 5);
console.log("\n")
/*--------------------------------------------------------------------------------- */

/* Objetos */
console.log("Object Destructuring");
const user = {
    id: 42,
    displayName: 'Pedro',
    fullName: {
        firstName: 'Pedro',
        lastName: 'Maranhão'
    }
};

function userId({id}){
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return ` ${first} ${last}`;
}

console.log(userId(user));
console.log(getFullName(user));
console.log("\n")
/*--------------------------------------------------------------------------------- */

/* LOOPS */
console.log("if/else"); /* if - else if - else */

function numeroPositivo(num){
    let resultado;

    if(num < 0){
        resultado = false;
    } else {
        resultado = true;
    }
    return resultado;
}

console.log(numeroPositivo(2));
console.log(numeroPositivo(-9));
console.log("\n")
/*--------------------------------------------------------------------------------- */

console.log("switch");
function getAnimal(id){
    switch(id) {
        case 1: 
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "peixe";        
    }
}

console.log(getAnimal(1));
console.log(getAnimal(4));
console.log(getAnimal("1"));
console.log("\n")
/*--------------------------------------------------------------------------------- */

console.log("for")
function multiplicaPorDois(arr){
    let multiplicados = [];

    for(let i = 0; i < arr.length; i++){
        multiplicados.push(arr[i] * 2);
    }
    return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];

console.log(multiplicaPorDois(meusNumeros));
console.log("\n")
/*--------------------------------------------------------------------------------- */

console.log("for...in");

function forInExemplo(obj){
    for(prop in obj) {
        console.log(prop);
    }
}

const meuObjeto = {
    nome: "Pedro",
    idade: "36",
    cidade: "Salvador"
};

console.log(forInExemplo(meuObjeto));
console.log("\n")
/*--------------------------------------------------------------------------------- */

console.log("for...of");
function logLetras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}
const palavra = "abacaxi";
console.log(logLetras(palavra));
console.log("\n")
/*--------------------------------------------------------------------------------- */

