//Alunos aprovados
const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Safira',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Pulo',
        nota: 6,
        turma: '2D',
    },
    {
        nome: 'Migule',
        nota: 3,
        turma: '2D',
    }
];

function alunosAprovados(array, media){
    let aprovados = [];

    for (let i = 0; i < array.length; i++) {
        
        const {nota, nome} = array[i];
        
        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));

//This
function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30
};

const pessoa2 = {
    nome: "Carla",
    idade: 26
};

const animal = {
    nome: "Fiona",
    idade: 5,
    raca: "Pug"
};

console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.call(animal, 7));
console.log(calculaIdade.apply(pessoa1, [7]));