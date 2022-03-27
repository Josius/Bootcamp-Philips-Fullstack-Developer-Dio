//VERIFICAR PALÍNDROMO
function verificaPalindromo(string){
    if(!string) return;//forma de verificar se a variável é nula vazia ou undefined

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("oco"));
console.log(verificaPalindromo("gato"));

let myVar = null;

console.log(verificaPalindromo(myVar));

function verificaPalindromo2(string){
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length-1-i]){
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo2("abba ajba"));

//SUBSTITUIR NÚMEROS PARES
function substituiPares(array){
    
    if(!array) return -1; //verifica se existe, se é null
    if(!array.length) return -1;//verifica o tamanho, se é vazio

    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Vc já é 0!")
        }else if(array[i] %2 === 0){
            console.log(`Susbtituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }
    return array;
}

let array = [1, 2, 3, 4, 6, 80, 23, 33, 90];
console.log(array);
console.log(substituiPares(array));
console.log(substituiPares(null));
console.log(substituiPares([]));