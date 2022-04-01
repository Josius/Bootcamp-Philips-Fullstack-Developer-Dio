// Função Anônima
const soma = function (a, b){
    return a + b;
}
soma(1, 2);
soma(5, 4);

// Função Autoinvocável -> IIFE (Immediately Invoked Function Expression) -> também é uma função anônima -> também pode receber parâmetros
(
    function(){
        let name = "NomeQualquer";
        return name;
    }
)();

// Armazenando função autoinvocável em uma variável e recebendo parâmetros
const soma3 = (
    function(){
        return a + b;
    }
)(1, 2);

console.log(soma3);

//Callbacks -> no exemplo abaixo, é o termo 'operacao'
const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const soma = function(num1, num2){
    return num1 + num2;
}

const sub = function(num1, num2){
    return num1 - num2;
}

const resultSoma = calc(soma, 1, 2); // callback -> soma
const resultSub = calc(sub, 1, 2); // callback -> sub

console.log(resultSoma);
console.log(resultSub);
