const filmesJson = require("../models/filmes.json");

const getAll = (req, res) => {
    res.status(200).send(filmesJson);
};

const getById = (req, res) => {
    // pegar o id solicitado na requisição
    let requestedId = req.params.id;
    let filteredFilme = filmesJson.find(filme => filme.id == requestedId);

    // enviar uma resposta
    res.status(200).send(filteredFilme);
};

// adicionar um post
const createFilme = (req, res) => {
    // acessar os dados enviados na requisição
    let requestedTitle = req.body.titulo;
    let requestedGenre = req.body.genero;
    let requestedWriter = req.body.escritor;

    let newFilme = {
        "id": Math.random().toString(32).substr(2, 5),
        "dataCriacao": new Date(),
        "titulo": requestedTitle,
        "genero": requestedGenre,
        "escritor": requestedWriter
    };

    filmesJson.push(newFilme);

    // enviar uma resposta
    res.status(201).send({
        "mensagem": "Filme criado com sucesso",
        newFilme
    });
};

// substituir todo item da lista do json
const replaceFilme = (req, res) => {
    // acessar os dados da requisição
    let requestedId = req.params.id;
    let filmeFromBody = req.body;

    let filteredFilme = filmesJson.find(filme => filme.id == requestedId);

    let updatedFilme = {
        "id": filteredFilme.id,
        "dataCriacao": filteredFilme.dataCriacao,
        "titulo": filmeFromBody.titulo,
        "genero": filmeFromBody.genero,
        "escritor": filmeFromBody.escritor
    };

    // substituir o item
    const indice = filmesJson.indexOf(filteredFilme);
    // splice(indice, quantos elementos quero que remova, o que é pra ser adicionado)
    filmesJson.splice(indice, 1, updatedFilme);
    // enviar resposta
    res.status(200).send({
        "mensagem": "Filme substituído com sucesso",
        updatedFilme
    });
};

// atualizar apenas um título
const updateTitle = (req, res) => {
    // pegar os dados da requisição
    let requestedId = req.params.id;
    let newTitle = req.body.titulo;

    // achar o item da lista que tem o mesmo id
    let filteredFilme = filmesJson.find(filme => filme.id == requestedId);

    // o título do post filtrado seja igual ao título que vem da requisição
    filteredFilme.titulo = newTitle;

    res.status(200).send({
        "mensagem": "Título atualizado com sucesso",
        filteredFilme
    });
};


module.exports = { getAll,
     getById, createFilme,
      replaceFilme, updateTitle }