//ARRAYS
//declarando um array:
let array = ['string', 1, true];
console.log(array);

let array0 = ['string', 0, false, ['array1', 2, true], ['array2'], ['array3'], ["array4"]];
console.log(array0);
console.log(array0[0]);
console.log(array0[3]);

//forEach
console.log('forEach');
array0.forEach(function(item, indice){console.log(indice, item)});

//push -> add item no final do array
console.log('push');
array0.push('novo item');
console.log(array0);

//pop -> remove item no final do array
console.log('pop');
array0.pop();
console.log(array0);

//shift -> remove item no inicio do array
console.log('shift');
array0.shift();
console.log(array0);

//unshift -> add item no inicio do array
console.log('unshift');
array0.unshift('novo item no inicio')
console.log(array0);

//indexOf -> retorna o indice de um valor
console.log('indexOf');
console.log(array0.indexOf(false));

//splice -> remove ou susbstitui um item pelo indice
console.log('splice');
array0.splice(0, 3);
console.log(array0);

//slice -> retorna uma parte de uma array existente
console.log('slice');
let novoArray = array0.slice(0, 3);
console.log(novoArray);

//OBJETOS
let object = { 
    string: 'stringU', 
    number: 1, 
    boolean: true,
    array: ["array", 1],
    objectInterno: {
        objetoInterno: 'obejeto interno'
    }
};

console.log(object);
console.log(object.number);
console.log(object.objectInterno);
console.log(object.objectInterno.objetoInterno);

//desestruturando objetos - 1
var string = object.string;
console.log(string);

var objectArray = object.array;
console.log(objectArray);

//desestruturando objetos - 2
var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);