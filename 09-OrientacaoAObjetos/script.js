// sempre que houver um get/set, usar um '_' como 1ª parte de uma variável, tal como na linha7
class ContaBancaria{
    construtor(agencia, numero, tipo e saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if( valor > this._saldo;){
            return "Operação negada"
        }
        return this._saldo = this._saldo -  valor;
    }

    depositar(valor){
        this._saldo = this.saldo + valor;
    }
}