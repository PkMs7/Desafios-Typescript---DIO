// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/* let employee = {};
employee.code = 10;
employee.name = "John"; */

const funcionario = {
    codigo: 10,
    nome: "João"
}

export function ImprimirCodigo(){

    let funcionario = {
        codigo: 10,
        nome: "João"
    }

    return console.log(funcionario.codigo)

}

export function ImprimirNome(){

    let funcionario = {
        codigo: 10,
        nome: "João"
    }

    return console.log(funcionario.nome)

}