export class ContaCorrente{
    agencia;
    saldo;
    
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor; // retira do saldo o valor que foi sacado
        }else{
            console.log("Não Foi possivel fazer esta transação")
        }
    }

    depositar(valor){
        if(valor > 0){
            this.saldo += valor; // adiciona ao saldo o valor que foi depositado
            console.log(`Foi depositado o valor de ${valor}`);
        } else{
            console.log(`O valor de ${valor} esta incorreto. Refaça a transação.`);
        }
    1}
}
