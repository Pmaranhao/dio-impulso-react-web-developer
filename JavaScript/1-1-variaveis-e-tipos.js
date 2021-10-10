// Teste com variáveis 

var primeiroNome = "João";
let ultimoNome = "Souza";

if(primeiroNome === "João"){
    let ultimoNome = "Rodrigues";
    var primeiroNome = "Pedro"
    ultimoNome = "Maranhão";
}
console.log("Teste com variáveis:");
console.log(primeiroNome, ultimoNome + "\n");
console.log("____________________________________________________________");

const PI = 3.14;
console.log("Declaração de constante que não pode ser reatribuida.");
console.log(PI);
console.log("____________________________________________________________");

//Strings
console.log("Strings");
var cidade = "Rio de Janeiro";
var estado = "RJ";
console.log(`Tipo da variável cidade: ${typeof cidade}`);
console.log("Concatenar Strings " + cidade + " " + estado);
console.log("Quantos caracteres existem na variável cidade: " + cidade.length);
console.log(cidade.split(" "));
console.log(cidade.includes("Rio"));
console.log("____________________________________________________________");

//Números
console.log("Números");
var nota1 = 10;
var nota2 = 6.7;
var nota3 = 8.8;
console.log(`Nota 2: ${nota2}`);
console.log("Nota 2: " + Math.floor(nota2));
console.log("Nota 2: " + Math.ceil(nota2));
console.log("____________________________________________________________");

//Booleans
console.log("Booleans");
var ativo = true;
var validacao = 3 === 0;
console.log(`Ativo: ${ativo}`);
console.log("Validação: " + validacao);
console.log("____________________________________________________________");

//Arrays
console.log("Arrays");
var array = ["Morango", "limão"];
array.push("Banana");
array.push("Uva");
console.log(array);
array.pop();
console.log(array);
console.log(array.length);
array.unshift("Laranja");
console.log(array);
console.log("Tem banana nessa lista? " + array.includes("Banana"));
console.log("____________________________________________________________");

//objetos
console.log("Objetos");
var obj = {};
obj.time = "Botafogo";
obj.nome = "Pedro";
obj. idade = 36;
console.log(obj);
console.log("Qual o nome: " + obj.nome);
console.log("____________________________________________________________");

//Empty, null e undefined
var vazio = "";
var nulo = null;
var telefone;
console.log(vazio);
console.log(nulo);
console.log(telefone);
console.log("____________________________________________________________");
