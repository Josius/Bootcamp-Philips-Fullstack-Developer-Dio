/* 
Estrutura do Map
 - Uma coleção de arrays no formato[chave, valor];
 - Pode ser iterado por um loop for...of
*/
// Declarando um map e métodos de add, ler e deletar
const myMap = new Map();
myMap.set('apple', 'fruit');// Map(1){"apple" => "fruit"}
myMap.get(apple);           // "fruit"
myMap.delete("apple")       //true
myMap.get("apple")          // undefined

/* 
Diferenças entre Map e Objeto
 - Maps podem ter chvs de qlqr tipo; (objs -> chvs são strings)
 - Maps possuem a propriedade length;(objs -> não tem, precisa iterar)
 - Maps são mais fáceis de iterar;
 - Utilizado qndo o vlr das chvs é desconhecido;
 - Os vlrs tem o mesmo tipo;
*/