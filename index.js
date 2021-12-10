const express = require("express");
const app = express();

// Informamos ao Express que iremos utilizar JSON no Body
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Hello, World!");
});

app.get("/oi", function (req, res) {
    res.send("Olá, mundo!");
});

// Endpoints de Heróis

const lista = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];
//              0                   1                2

// [GET] "/herois" Read All (Ler tudo)
app.get("/herois", function (req, res) {
    res.send(lista.filter(Boolean));
});

// [GET] "/herois/:id" Read Single - by Id (Ler individualmente - pelo Id)
app.get("/herois/:id", function (req, res) {
    const id = req.params.id - 1;

    const item = lista[id];

    if (!item) {
        res.status(404).send("Não foi encontrado nenhum registro com esse ID.");

        return;
    }

    res.send(item);
});

// [POST] "/herois" Create (Criar)
app.post("/herois", function (req, res) {
    // console.log(req.body, typeof req.body);

    const item = req.body.nome;

    if (!item) {
        res.status(400).send(
            "Falha ao criar o registro. 'Nome' não foi encontrado."
        );

        // Return encerra a chamada de uma função
        return;
    }

    lista.push(item);

    res.status(201).send("Registro criado com sucesso!");
});

// [PUT] "/herois/:id" Update (Atualizar)
app.put("/herois/:id", function (req, res) {
    const id = req.params.id - 1;

    const item = req.body.nome;

    if (!item) {
        res.status(400).send(
            "Falha ao criar o registro. 'Nome' não foi encontrado."
        );

        // Return encerra a chamada de uma função
        return;
    }

    if (!lista[id]) {
        res.status(404).send("Não foi encontrado nenhum registro com esse ID.");

        return;
    }

    lista[id] = item;

    res.send("Registro atualizado com sucesso!");
});

// [DELETE] "/herois/:id" Delete (Remover)
app.delete("/herois/:id", function (req, res) {
    const id = req.params.id - 1;

    if (!lista[id]) {
        res.status(404).send("Não foi encontrado nenhum registro com esse ID.");

        return;
    }

    delete lista[id];

    res.send("Registro excluído com sucesso!");
});

app.listen(3000);
