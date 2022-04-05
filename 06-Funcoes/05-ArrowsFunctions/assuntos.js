//SINTAXE
//01
const helloWorld = function(){
    return "Hello World";
}
//02
const helloWorld = () => {
    return "Hello World";
}
//03
const helloWorld = () => "Hello World";
// Os três códigos acima possuem o mesmo sentido, ou seja, ao invés de chamar uma função anônima, como em 01, usamos somente (), como em 02. E em 03, como temos somente uma linha retornando, podemos omitir o return da função.

//REGRAS A MAIS
// Se houver somente uma linha, podemos dispensar as chaves e o return:
const soma = (a, b) => a + b;
soma(4, 6) // 10
// Se houver somente um parâmetro, podemos dispensar os parênteses:
const soma = a => a;
soma(4); // 4

//IMPORTANTE -> Arrow function NÃO faz hoisting! Por conta de seu valor ser armazenado dentro de uma constante.
soma(2, 4)
const soma = (a, b) => a + b;

//Outras Restrições
/* 
- this sempre será o objeto global. Métodos para modificar seu valor não irão funcionar;
- Não existe o objeto "arguments" (junta numa lista todos os argumentos que vc mandou para a função);
- O construtor(ex: new MeuObjeto()) também não pode ser utilizado;
*/