// A palavra reservada this é uma referência de contexto.
const pessoa = {
    firstName: "Josal",
    lastName : "Soares",
    id       : 1,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    },
    getId : function(){
        return this.id;
    }
};

pessoa.fullName(); // "André Soares"

pessoa.getId(); // 1

// Seu valor pode mudar de acordo com o lugar no código ao qual foi chamada:

/* 
CONTEXTO            ->      REFERÊNCIA
Em um obj(método)   ->      Próprio obj dono do método
Sozinha             ->      Obj global(em navegadores, window)
Função              ->      Obj global
Evento              ->      Elemento que recebeu o evento
*/

// Fora de função
console.log(this);// resulta em -> {} -> obj vazio

// Dentro de uma função
(function(){
    console.log(this);
})();// resulta em uma saída com obj global

// Dentro de um obj (método)
const pessoaDois = {
    firstName: 'Dinego',
    lastName: 'Vienira',
    getFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    },
};

pessoa.getFullName();// resulta em -> Dinego Vienira

//Em um evento no HTML
// <html>
//...
<button
    id="my-btn"
    onclick="console.log(this)"
>click me!</button>
//...
// <html>
//resulta em uma saída

//MANIPULANDO O SEU VALOR
//CALL
const pessoaUm = {
    nome: 'Miguel',
};

const animal = {
    nome: 'Murphy',
};

function getSomething(){
    console.log(this.nome);
}

getSomething.call(pessoa);
// por conta do 'this', o retorno é Miguel
getSomething.call(animal);
// por conta do 'this', o retorno é Murphy

//Outra forma de usar:
const myObj = {
    num1: 2,
    num2: 4,
};
function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
}
soma.call(myObj, 1, 5);
//saída -> 12


//APPLY
const pessoa = {
    nome: 'Miguel',
};

const animal = {
    nome: 'Godi',
};

function getSomething(){
    console.log(this.nome);
}
getSomething.apply(pessoa);
// por conta do 'this', o retorno é Miguel
getSomething.apply(animal);
// por conta do 'this', o retorno é Murphy

//Outra forma de usar:
const myObj = {
    num1: 2,
    num2: 4,
};
function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
}
soma.call(myObj, [1, 5]); // -> os argumentos são passados dentro de um array
//saída -> 12

// BIND
// Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro
const retornaNomes = function(){
    return this.nome;
};

let bruno = retornaNomes.bind({ nome: 'Bruno' });

bruno();
// retorna -> Bruno

