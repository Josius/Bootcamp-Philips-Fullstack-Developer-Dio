/* 
Estrutura do Set
 - armazenam apenas valores únicos, ou seja, não há dois valores iguais
*/
// Declarando um set e métodos de add, consultar e deletar
const mySet = new Set(myArray);

mySet.add(1);
mySet.add(5);
mySet.has(1);// true
mySet.has(3);// false
mySet.delete(5);

/* 
Diferenças entre Set e Array
 - Possui vlrs únicos;
 - Em vez da propriedade length, consulta-se o nº de registros pela propriedade size;
 - Não possui os métodos map, filter, reduce, etc;
*/