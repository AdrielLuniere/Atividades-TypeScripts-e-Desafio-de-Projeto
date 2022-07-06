"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'Desenvolvedora'
};
pessoa.idade = 35;
const andre = {
    nome: "Andre",
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: "Paula",
    idade: 35,
    profissao: 'Nutricionista'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Gamer"] = 3] = "Gamer";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Mariana',
    idade: 28,
    profissao: Profissao.Gamer
};
const Lorrayne = {
    nome: 'Lorrayne',
    idade: 28,
    profissao: Profissao.Desenvolvedora
};
const Mirian = {
    nome: 'Mirian',
    idade: 55,
    profissao: Profissao.Professora,
    materia: ['Matematica discreta', 'nutrição']
};
const Renan = {
    nome: 'Renan',
    idade: 29,
    materia: ['Matematica discreta', 'nutrição']
};
function listar(lista) {
    for (const item of lista) {
        console.log('-', item);
    }
}
listar(Mirian.materia);
