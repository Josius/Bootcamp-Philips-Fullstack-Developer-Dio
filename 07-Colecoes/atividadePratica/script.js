// Map
function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin') admins.push(key);
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luix', 'User');
usuarios.set('Steff', 'Admin');
usuarios.set('Seu', 'User');
usuarios.set('Jorge', 'Admin');

console.log(getAdmins(usuarios));

// Set
const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(array){
    const mySet = new Set(array);
    return [...mySet];//usando spread
}
console.log(valoresUnicos(meuArray));