//Desafio 1

function ImprimirCodigo(){

    let funcionario = {
        codigo: 10,
        nome: "João"
    }

    return console.log(funcionario.codigo)

}

function ImprimirNome(){

    let funcionario = {
        codigo: 10,
        nome: "João"
    }

    return console.log(funcionario.nome)

}

//Desafio 2

enum Trabalho {
    Atriz,
    Padeiro
}

type DadosPessoais = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

function ImprimirPessoa1() {

    let pessoa1: DadosPessoais = {
        nome: "Maria",
        idade: 29,
        profissao: Trabalho.Atriz
    }

    return console.log(pessoa1.nome), console.log(pessoa1.idade), console.log(pessoa1.profissao)
        

}

function ImprimirPessoa2() {

    let pessoa2: DadosPessoais = {
        nome: "Roberto",
        idade: 19,
        profissao: Trabalho.Padeiro
    }

    return console.log(pessoa2.nome), console.log(pessoa2.idade), console.log(pessoa2.profissao)
        

}

function ImprimirPessoa3() {

    let pessoa3 = {
        nome: "Laura",
        idade: "32",
        profissao: Trabalho.Atriz
    }

    return console.log(pessoa3.nome), console.log(pessoa3.idade), console.log(pessoa3.profissao)
        

}

function ImprimirPessoa4() {

    let pessoa4 = {
        nome: "Carlos",
        idade: 19,
        profissao: Trabalho.Padeiro
    }

    return console.log(pessoa4.nome), console.log(pessoa4.idade), console.log(pessoa4.profissao)
        
}

//Desafio 3

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldoTotal += soma
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}

botaoLimpar.addEventListener('click', () => { 
    limparSaldo();
});