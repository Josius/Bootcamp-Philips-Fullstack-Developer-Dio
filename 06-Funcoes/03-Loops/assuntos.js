//IF/ELSE:
function numeroPositivo(num){
    const ehNegativo = num < 0;// -> colocando a condicional em uma constante, torna o código mais legível (clean code)

    if(ehNegativo){ // -> clean code
        return false;
    }// -> não usando desnecessariamente o else, poupamos a memória do PC, não armazenando mais um endereço de memória para o 'else'

    return true;
}

//usando <else if> e <!(negação)>
function numeroPositivo(num){
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if(ehNegativo){
        return "Esse número é negativo!";
    } else if(!ehNegativo && maiorQueDez){
        return "Esse número é positivo e maior que 10!"
    }

    return "Esse número é positivo!";
}

//SWITCH -> se o if-else ficar muito gde, use o switch
//ele equivale a uma comparação de tipo valor (===)
//sempre precisa de um vlr default
//ideal para quando se precisa comparar muitos valores

function getAnimal(id){
    switch(id){
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

getAnimal(1);// cão
getAnimal(4);// peixe
getAnimal("1");// peixe

//FOR
function multiplicaPorDois(array){
    let multiplicados = [];

    for(let i = 0; i < array.length; i++){
        multiplicados.push(array[i] * 2);//add elemts no final do array
    }

    return multiplicados;
}

const meusNumeros = [1, 2, 3, 16];
multiplicaPorDois(meusNumeros);// 2, 4, 6, 32

//FOR IN -> Loop for entre propriedades enumeráveis de um objeto.
function forInExemplo(obj){
    for(prop in obj){
        console.log(prop); // resultado 1
        console.log(obj[prop]); // resultado 2 -> ao invés de <obj[prop]> pode-se usar <obj.prop> que acessará cada propriedade do objeto.
    }
}

const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(meuObjeto);
//resultado 1:
    //nome
    //idade
    //cidade
//resultado 2:
    //João
    //20
    //Salvador

//FOR OF -> Loop entre estruturas iteráveis (arrays, strings) -> for of é um <for each>
function logLetras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}

const palavra = "abacaxi";

logLetras(palavra);
//resultado -> a - b - a - c - a - x - i

function logLetras(nums){
    for(num of nums){
        console.log(num);
    }
}

const nums = [30, 20, 233, 2];

logLetras(nums);
//resultado -> 30 - 20 - 233 - 2

//WHILE
function exemploWhile(){
    let num = 0;
    while(num <= 5){
        console.log(num);
        num++;
    }
}

exemploWhile();

//DO...WHILE -> 1ª execução sempre ocorre
function exemploDoWhile(){
    let num = 0;
    do{
        console.log(num);
        num++;
    }while(num <= 5)
}

