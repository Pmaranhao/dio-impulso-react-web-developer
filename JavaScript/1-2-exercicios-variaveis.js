var frase = "Arara";
frase = frase.toLowerCase();
var verifica = frase.split("").reverse().join("");
verifica = verifica.toLowerCase();
if(frase === verifica){
    console.log("É políndromo!");
}else{
    console.log("Não é políndromo");
}
console.log(verifica);

/* Solução 1
    function verificaPalindromo(string){
    if(!string) return "string inexistente"; 
    
    return string..split("").reverse().join("") === string;
}    
*/

/* Solução 2
    function verificaPalindromo(string){
    if(!string) return "string inexistente"; 
    
    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }

    return true;
}    

console.logo(verificarPalindromo("abba"));
*/

/* ****************************************************** */

var array = [0,3,2,7,8,10,1,5];
for(let i = 0; i < array.length; i++){
    if(array[i] % 2 == 0){
        array[i] = 0
    }
}
console.log(array);


/* Solução
    function substituiPares(array){
        if(!array.length) return -1;
        if(!array) return -1;

        for(let i = 0; i < array.length; i++){
            if(array[i] === 0) {
                console.log("Você já é zero!!")
            } else if (array[i] % 2 === 0){
                console.log(`Substituindo ${array[i]} por 0 ...`);
                array[i] = 0;
            }
        }    
        return array;
}    

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
substitiPares(arr);
*/