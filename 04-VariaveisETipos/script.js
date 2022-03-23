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