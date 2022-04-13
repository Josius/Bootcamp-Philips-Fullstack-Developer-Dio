INTERFACES E TYPES:
Typescript permite tipar as váriaveis
function soma(a: number, b: number) {
    return a + b;
}
soma(3, 3);

//interfaces -> contratos para implementar com as classes
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    // executarRugido(alturaEmDecibeis: number): void;
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'aquático',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}
animal.executarRugido(3)

types -> semelhantes a structs da linguagem C
uma forma de utilizar:
type IAnimal = {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRugido(alturaEmDecibeis: number): void;
}

interface ICanino extends IAnimal {
    porte: 'pqno' | 'mdo' | 'gde';
}

// tmb é possível usar & no lugar de | para juntar os dois tipos
type IDomestico = IFelino | ICanino

const animalDom: IDomestico = {
    nome: 'cachorro',
    porte: 'mdo',
    tipo: 'terrestre',
    domestico: true
}

// definindo o tipo que será passado para o TS
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    console.log('Digitei');
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});

// GENERIC TYPES:
function adicionaApendiceALista<T>(array: T[], valor: T) {
    return array.map(() => valor);
}

adicionaApendiceALista(['a', 'b', 'c'], 'd');

// Desenvolvendo condicionais a partir de parâmetros:
interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario) {
        //redirecionar para a área de administração
    } else {
        //redirecionar para a área do usuário
    }
}

//Utilizando o caracter '?' para variáveis opcionais
interface IUsuario {
    id: string;
    email: string;
    cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario) {
    if (usuario.cargo) {
        //redirecionar(usuario.cargo);
    } else {
        //redirecionar para a área do usuário
    }
}

// Criando variáveis com propriedades readonly e private
interface Cachorro{
    readonly nome: string;
    readonly idade: number;
    readonly parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    +readonly [K in keyof Cachorro]-?: Cachorro[K];// '-?' -> remove a interrogação q torna a variável opcional e a torna obrigatória
}

class MeuCachorro implements CachorroSomenteLeitura{
    nome;
    idade;
    parqueFavorito: 'DoBairro';
    
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Jopolus', 14);
cao.idade = 8; // -> não dá certo

// Como importar bibliotecas com typescript
// 1 -> criar um arquivo typings.d.ts que irá definir os typings gerais da aplicação
// 2 -> exemplo em .js:
interface IEstudante{
    name: string;
    idade: number;
}

interface IEstudante{
    serie: string;
}
// os atributos de cada declaração são somados em uma única:
const estudante: IEstudante = {
    idade:13,
    name:'Golimar',
    serie:'5ºB'
}

//typings.d.ts
import $ from 'jquery';

$.fn.extends({
    novaFuncao(){
        console.log('Chamou nova funcao');
    }
});

$('body').novaFuncao();
//typings.d.ts