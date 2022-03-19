function comparacao(){
    let num1 = Number(prompt('Insira o 1º número:'));
    
    let num2 = Number(prompt('Insira o 2º número:'));
    let soma = num1 + num2;
    let resposta;
    let resposta2;
    let resposta3;

    (num1===num2) ? resposta = `Os números ${num1} e ${num2} são iguais. ` : resposta = `Os números ${num1} e ${num2} não são iguais. `;
    
    if(soma==10){
        resposta2 = `Sua soma é ${soma}, que é igual a 10 `;
        
    }
    else if(soma<10){
        resposta2 = `Sua soma é ${soma}, que é menor que 10 `;
        
    }else{
        resposta2 = `Sua soma é ${soma}, que é maior que 10 `;
        
    }

    if(soma==20){
        resposta2 = `Sua soma é ${soma}, que é igual a 20 `;
        alert(resposta + resposta2 + resposta3);
        novaOperacao();
    }
    else if (soma<20) {
        resposta3 = `e menor que 20.`
        alert(resposta + resposta2 + resposta3);
        novaOperacao();
    } else {
        resposta3 = `e maior que 20.`
        alert(resposta + resposta2 + resposta3);
        novaOperacao();
    }

    alert(resposta + resposta2 + resposta3);

    // nova operação
    function novaOperacao() {
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
        if (opcao == 1) {
            comparacao();
        } else if (opcao == 2) {
            alert('Até mais!');
        } else {
            alert('Digite uma opção válida!');
            novaOperacao();
        }
    }
}
comparacao();

