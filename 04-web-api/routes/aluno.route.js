var express = require('express');
var router = express.Router();

const AlunoService = require('../services/aluno.service');

router.get(
    "/listar",
    (request, response, next) => {
        response.json(AlunoService.listar());
    }
)

router.post(
    "/criar",
    (request, response) => {
        const novoAluno = AlunoService.criar(request.body);
        response.json(novoAluno);
    }
)

router.get(
    "/recuperar/:id",
    (request, response) => {
        const aluno = AlunoService.recuperar(request.params.id);
        response.json(aluno);
    }
)

router.put(
    "/atualizar/:id",
    (request, response) => {
        const alunoAtualizado = AlunoService.atualizar(
            request.params.id,
            request.body
        )
        response.json(alunoAtualizado)
    }
)

router.delete(
    "/apagar/:id",
    (request, response) => {
        const resposta = AlunoService.apagar(request.params.id)
        response.json(resposta)
    }
)

module.exports = router;