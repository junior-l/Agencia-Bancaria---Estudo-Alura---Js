import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//clientes
const cliente1 = new Cliente("Ricardo", 11122233309);



const cliente2 = new Cliente("Alice", 88822233309);


const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(1000);


const conta2 = new ContaCorrente(1001, cliente2);

console.log(cliente2);




