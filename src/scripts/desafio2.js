"use strict";
// Como podemos melhorar o esse código usando TS? 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trabalho = void 0;
/* let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
} */
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Atriz"] = 0] = "Atriz";
    Trabalho[Trabalho["Padeiro"] = 1] = "Padeiro";
})(Trabalho = exports.Trabalho || (exports.Trabalho = {}));
let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Trabalho.Atriz
};
let pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Trabalho.Padeiro
};
let pessoa3 = {
    nome: "Laura",
    idade: "32",
    profissao: Trabalho.Atriz
};
let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
};
