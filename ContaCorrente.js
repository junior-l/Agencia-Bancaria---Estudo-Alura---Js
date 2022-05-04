import {Cliente} from "./Cliente.js";
import { Conta } from "./Conta.js";
export class ContaCorrente extends Conta{
    static numeroDeCotas = 0;
    constructor(cliente, agencia){
        super(0,cliente,agencia);
       ContaCorrente.numeroDeCotas +=1;
    }
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
    

}