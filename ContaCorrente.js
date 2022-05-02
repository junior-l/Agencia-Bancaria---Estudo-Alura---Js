import {Cliente} from "./Cliente.js";
export class ContaCorrente {
    static numeroDeCotas = 0;
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente)
        this._cliente = novoValor;
    }

    _saldo = 0;

    get saldo(){
        return this._saldo;
    }

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeCotas +=1;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }

    }

    depositar(valor) {
        if(valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir (valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.cidade = 'São Paulo'
    conta.depositar(valorSacado);

	}
}