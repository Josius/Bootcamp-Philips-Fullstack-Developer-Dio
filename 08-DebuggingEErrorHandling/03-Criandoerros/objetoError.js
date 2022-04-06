// CRIANDO ERROS PERSONALIZADOS
// exemplo base:
new Error(message, fileName, lineNumber)// tds os parâmetros são opcionais -> fileName e lineNumber não são padrão, logo, pode não funcionar no navegador

// declarando um erro:
const MeuErro = new Error('Mensagem Inválida');
MeuErro.name = 'InvalidMessage';// o erro pode ter um nome
throw MeuErro;
// resulta em na mensagem (no caso, Mensagem Inválida) e na linha que ocorreu o erro.
//saída: Uncaught InvalidMessage: Mensagem Inválida

//Há tmb 'MeuErro.stack', que retorna o que foi executado e onde está o erro (linha:coluna <-> 3:17)