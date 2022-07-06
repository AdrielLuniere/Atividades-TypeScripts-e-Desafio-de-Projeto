const pessoa = {
    nome: 'Mariana',
    idade:  28,
    profissao:  'Desenvolvedora'

}

pessoa.idade = 35;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: "Andre",
    idade: 25,
    profissao: 'pintor'

}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: "Paula",
    idade: 35,
    profissao: 'Nutricionista'

}

enum Profissao{
    Professora,
    Atriz,
    Desenvolvedora,
    Gamer
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa{
    materia: string[]
}

const vanessa: Pessoa = {
    nome: 'Mariana',
    idade:  28,
    profissao: Profissao.Gamer

}

const Lorrayne: Pessoa = {
    nome: 'Lorrayne',
    idade:  28,
    profissao: Profissao.Desenvolvedora 

}

const Mirian: Estudante = {
    nome:'Mirian',
    idade: 55,
    profissao: Profissao.Professora,
    materia: ['Matematica discreta', 'nutrição']
}

const Renan: Estudante = {
    nome:'Renan',
    idade: 29,
    materia: ['Matematica discreta', 'nutrição']
}

function listar(lista: string[]) {
    for (const item of lista){
        console.log('-', item);
    }
}

listar(Mirian.materia);