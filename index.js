import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
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


