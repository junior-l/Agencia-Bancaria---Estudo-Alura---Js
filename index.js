class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
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


//clientes
const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = 88822233309;

//conta Corrente
let valorSacado = 200;
const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;


//SACAR
contaCorrenteRicardo.saldo += 100;
console.log(contaCorrenteRicardo.saldo);

contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo.saldo);

//DEPOSITAR
contaCorrenteRicardo.depositar(315);
console.log(contaCorrenteRicardo.saldo);

contaCorrenteRicardo.depositar(-63);
console.log(contaCorrenteRicardo.saldo);


