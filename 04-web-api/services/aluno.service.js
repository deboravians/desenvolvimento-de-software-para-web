const AlunoModel = require("../models/aluno.model");

const alunos = require("../data/alunos");

let id = alunos.reduce((max, a) => Math.max(max, a.id), 0);

class AlunoService {
    static listar() {
        return alunos;
    }

    static criar(alunoJson) {
        const aluno = new AlunoModel(
            ++id,
            alunoJson.nome,
            alunoJson.curso,
            alunoJson.ira
        )
        alunos.push(aluno);
        return aluno;
    }

    static recuperar(id) {
        for(let i = 0; i < alunos.length; i++) {
            if(alunos[i].id == id) {
                return alunos[i];
            }
        }
        return null;
    }

    static atualizar(id, {nome, curso, ira}) {
        for (let i = 0; i < alunos.length; i++) {
            if(alunos[i].id == id){
                alunos[i].nome = nome;
                alunos[i].curso = curso;
                alunos[i].ira = ira;
                return alunos[i];
            } 
        }
        return null;
    }

    static apagar(id) {
        for (let i = 0; i < alunos.length; i++) {
            if(alunos[i].id == id) {
                alunos.splice(i, 1);
                return {
                    "sucesso" : true
                }
            }
        }
        return {
            "sucesso" : false
        }
    }
}

module.exports = AlunoService