//Ensinar como manipular parâmetros de uma função
//Técnicas para lidar com números indefinidos de parâmetros
//PARÂMETROS:
//na 1ª linha abaixo, com 'num = 1', significa que se num === undefined, ele será então, por padrão igual a 1
function exponencial(array, num = 1){
    const result = [];

    for(let i = 0; i < array.length; i++){
        result.push(array[i] ** num);
    }

    return result;
}

exponencial([1, 2, 3, 4]);// elevando a 1
exponencial([1, 2, 3, 4], 4);// elevanado a 4ª potência

//OBJETO ARGUMENTS:
//Um array com tds os parâmetros passados quando a função foi invocada.
//abaixo, encontrar maior número dentre os valores enviados para a função, que pode ser desde nenhum número até 'n' números. 
function findMax(){
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++) {
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

findMax();
findMax(1, 2, 3, 6, 90, 1); // -> 90

//retorna tudo que foi passado:
function showArgs(){
    return arguments;
}

//ARRAYS E OBJETOS
//Spread -> lida separadamente com elementos, tornando o que era parte de um array em um elemento independente.
function sum(x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // -> spred <...nomeDaVariavel>, separará os nºs, onde 1=x, 2=y, 3=z.

//Rest -> combina os argumentos em um array (o contrário de spread).
function confereTamanho(...args){
    console.log(args.length)
}

confereTamanho();//0
confereTamanho(1, 2);//2
confereTamanho(4, 3, 5);//3

//OBJETOS
//Object Destructuring -> Entre chvs {}, podemos filtrar apenas os dados que nos interessam em um objeto.
const user = {
    id:42,
    displayName: "Jod",
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id}){
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}){
    return `${first} ${last}`;
}

userId(user); // 42
getFullName(user); // John Doe

