//TIPOS PRIMITIVOS
//booleanos
var vOuF = false;
console.log(vOuF);
//para saber o tipo da variável
console.log(typeof(vOuF));

//number
var numberQlqr = 1;
console.log(typeof(numberQlqr));

//string
var nome = 'josius';
console.log(typeof(nome));

//COMO DECLARAR
var variavel = 'josildus';
variavel = 'mar';
console.log(variavel);

let variavel2 = 'amarus';
variavel2 = 'souxus'
console.log(variavel2);

//CONSTANTE
const constante = 2588;
console.log(constante);

//ESCOPO GLOBAL -> var
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    //ESCOPO LOCAL -> let
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

//ATRIBUICAO, COMPARACAO E COMPARACAO IDENTICA
//ATRIBUICAO -> '='
var atribuicao = 'atribuido';

//COMPARACAO -> '=='
var comparacao = '0' == 0;
console.log(comparacao);

//COMPARACAO IDENTICA -> '==='
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//OPERADORES ARITMETICOS
//adicao, subtracao, multiplicacao, divisao inteira e de resto seguem os mesmos padroes do java *, -, *, /, %

//potenciacao
var potenciacao = 2 ** 8;
console.log(potenciacao);

//OPERADORES RELACIONAIS
//  >, <, >=, <=
//maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

//OPERADORES LOGICOS
//  &&, ||, !   -> and, or e not
var e = true && false;
console.log(e);