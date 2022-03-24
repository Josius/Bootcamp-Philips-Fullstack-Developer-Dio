//STRINGS
/* 
let nome = "João";
console.log(nome);

let sobrenome = "Pedro";
console.log(sobrenome,"- do tipo:",typeof(sobrenome));

//concatenando duas strings
let concatenado = nome.concat(sobrenome);
console.log(concatenado);
console.log(typeof(concatenado));
console.log(concatenado.length);

//strings quando são objetos
let exemplo = new String("blablabla");
console.log(typeof(exemplo));
console.log(exemplo);// em prototype, no console, aparece todas os métodos que podem ser utilizados com o objeto

//encontrando pelo índice da string
console.log(nome[1]);

//outros tipos de concatenação:
//1 -onde há espaço entre as strings
concatenado = nome + " " + sobrenome;
console.log(concatenado);
//1 - um nome na 1ª linha, outro na 2ª
concatenado = nome + "\n" + sobrenome;
console.log(concatenado);

//1 -onde há espaço entre as strings
concatenado = `${nome} ${sobrenome}`;
console.log(concatenado);
//2 - um nome na 1ª linha, outro na 2ª 
concatenado = `${nome}
${sobrenome}`;
console.log(concatenado);

//usando aspas
concatenado = "\"";
console.log(concatenado);

//separando a frase
let frase = "Olá, tudo bem?";
console.log(frase.split(""));// passando uma string vazia, ele separará todas as letras
console.log(frase.split(" "));// passando um espaço, ele separará todas os caracteres entre os espaços

//verificando se há certa palavra
console.log(frase.includes("tudo"));

//verificando se começa/termina com alguma coisa
console.log(frase.startsWith("Ol"));
console.log(frase.endsWith("?"));

//alterando a frase - a variável string não se altera com replace, é necessário atribuir o retorno do replace a uma nova variável
let fraseModificada = frase.replace(",", "!");
console.log(frase);
console.log(fraseModificada);
 */

//NUMEROS
/* 
let num = 100;
console.log(num+3);
console.log(num/5);
console.log(num/3);
console.log(`Resto ${num%3}`);
console.log(num);
//nas alterações acima, não ocorre mudança no valor da variável num, somente o resultado aritmético. Para guardar o resultado, é necessário de uma outra variável recebendo o resultado.
let numDois = num * 5;
console.log(numDois);

//Biblioteca Math
console.log(`Número pi: ${Math.PI}`);

let cincoDivididoPorTres = 5 / 3;
console.log(`5 / 3 = ${cincoDivididoPorTres}`);
console.log(`5 / 3 arredondando para baixo: ${Math.floor(cincoDivididoPorTres)}`);
console.log(`5 / 3 arredondando para cima: ${Math.ceil(cincoDivididoPorTres)}`);

//Para imprimir na tela nº de porcentagem precisa concatenar com string o valor. Exemplo:
let percent = 10;
console.log(percent + "%");

//convertendo um nº para uma string
console.log(percent.toString());//novamente, não altera o original, somente retorna o resultado
console.log(typeof(percent));
console.log(typeof(percent.toString()));
*/

//Booleans
/* 
let validacao = 3 == 0;
console.log(validacao);
validacao = 3 === 0;
console.log(validacao);
validacao = 3 > 2;
console.log(validacao);
validacao.toString();
console.log(typeof(validacao));
console.log(typeof(validacao.toString()));
console.log(!validacao);
*/

//Vetores
/* 
//let array = new Array();//outra forma de declarar, não muito utilizada
let array = [];

//add itens ao array
console.log("add no final array - push");
array.push(3);
console.log(`array.length: ${array.length}`);
console.log(array);
array.push("!");
array.push(5);
array.push(2);
array.push('a');
console.log(`array.length: ${array.length}`);
console.log(array);
console.log("add no começo do array - unshift");
array.unshift('P');//add no começo do array
console.log(`array.length: ${array.length}`);
console.log(array);

//removendo itens do array
console.log("remove o último elemento do array - pop");
array.pop();//remove o último elemento do array
console.log(`array.length: ${array.length}`);
console.log(array);
console.log("remove o primeiro elemento do array - shift");
array.shift();//remove o primeiro elemento do array
console.log(`array.length: ${array.length}`);
console.log(array);

for(let i = array.length; i >= 0; i--){
    console.log(array[i])
}
*/

//Objetos
//Estrutura do tipo 'chave/valor' (Map -> em Java)
/*
let obj = {};
console.log(obj);
obj.name = "julia";
console.log(obj);
obj.age = 20;
console.log(obj);

console.log(Object.values(obj));
console.log(Object.keys(obj));

let person = {
    name: "Rulia",
    age: 20,
    adress: "rua dois"
}
console.log(person);
//retornando valores
console.log(person.name);
console.log(person["name"]);
//add uma nova entrada chave/valor
person["qtdDeIrmaos"] = 3;
console.log(person);
//add uma nova entrada chave/valor oriunda de uma variável
let mom = "nomeDaMae";
person[mom] = "Maria";
console.log(person);
*/

//Empty, undefined e null

//undefined
//abacaxi;
//console.log(typeof(abacaxi));
let abacaxi;
console.log(typeof(abacaxi));
//empty
abacaxi = "";
console.log(typeof(abacaxi));
//null
abacaxi = null;
console.log(typeof(abacaxi));

//maca é undefined, !maca é igual a true, mas maca não é false, na realidade ele é falsy. Pesquisar sobre
let maca;
console.log(maca);
console.log(!maca);