const express = require("express");
const app = express();

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
    res.send(lista);
});

app.listen(3000);
