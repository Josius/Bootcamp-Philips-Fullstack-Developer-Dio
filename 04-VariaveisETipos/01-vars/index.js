// HOISTING
numberOne = 1; // não ocorre erro pois esta linha é tratada como variável global
console.log(numberOne + 2);
var numberOne;//não ocorre erro pois esta linha é tratada como variável global
// let numberOne; //ocorre erro, pois hoisting não permite que let, que é uma variável com escopo de bloco, seja atribuída antes de ser declarada, já o var não ocorre esse problema.

var firstName = 'João';
let lastName = 'Souza';
if(firstName === 'João'){
    var firstName = 'Pedro';
    let lastName = 'Silva';
    console.log('Bloco: ', firstName, lastName);
}

console.log('Global: ', firstName, lastName);//altera a variável global mas não a com escopo de bloco.

//OBS: O ideal é usar let ao invés de var, por questões de segurança, o let também pode ser uma variável global.

//CONSTANTE
/* Declarada em SNAKE_UPPER_CASE
   Escopo de bloco
   Não faz hoisting
   Não pode reatribuir
   Não pode redeclarar
*/
// Modo correto de usar
const FIRST_NAME  = "Stephany";
console.log('Constante: ', FIRST_NAME);