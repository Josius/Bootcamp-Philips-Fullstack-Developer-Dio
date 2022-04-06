// THROW E RETURN
function verificaPalindromo(string) {
    // linha abaixo retorna uma string
    if (!string) return "String inválida";
    // linha abaixo retorna um erro
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

verificaPalindromo('cat');

// TRY...CATCH
function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string);
    }
    catch (e) {
        console.log(e);
        throw e;// resulta em um erro: Uncaught String inválida
    }
    // finally sempre executa, mesmo com erro ou não.
    finally {
        console.log('A string enviada foi: ' + string);
    }
}

tryCatchExemplo('');// resulta em: String inválida, mas não é uma string, e sim um log do console contendo a frase String inválida

