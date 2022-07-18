"use strict";
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImprimirNome = exports.ImprimirCodigo = void 0;
/* let employee = {};
employee.code = 10;
employee.name = "John"; */
const funcionario = {
    codigo: 10,
    nome: "João"
};
function ImprimirCodigo() {
    let funcionario = {
        codigo: 10,
        nome: "João"
    };
    return console.log(funcionario.codigo);
}
exports.ImprimirCodigo = ImprimirCodigo;
function ImprimirNome() {
    let funcionario = {
        codigo: 10,
        nome: "João"
    };
    return console.log(funcionario.nome);
}
exports.ImprimirNome = ImprimirNome;
