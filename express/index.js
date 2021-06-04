const  express = require("express"); // Importando o express
const app = express(); // Iniciando o express

app.get("/", function(request, response) {
    response.send("<h2>Bem vindo ao meu site back</h2>");
    // response.send("Outra resposta"); // Não funciona
});

app.get("/blog/:artigo?", function(request, response) {
    var artigo = request.params.artigo;

    if(artigo) {
        response.send("<h2>Artigo: " + artigo + "</h2>")
    } else {
        response.send("<h2>Bem vindo ao meu blog sem nome!</h2>");
    }
});

app.get("/canal/youtube", function(request, response) {
    var canal = request.query["canal"];

    if(canal) {
        response.send("<h1>" + canal + "</h1>");
    } else {
        response.send("Nenhum canal fornicedo!");
    }
});

app.get("/ola/:nome/:empresa", function(request, response) {
    // request = dados enviados pelo usuário
    // response = resposta que vai ser enviada para o usuário
    var nome = request.params.nome;
    var empresa = request.params.empresa;
    response.send("<h1>Oi " + nome +  " do " + empresa + "</h1>");
});

app.listen(4000, function(erro) {
    if(erro) {
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
});

// iniciar um projeto node
// npm init

// instalar o express
// npm install express --save

//instalar o nodemon
// npm install nodemon -g

// rodar o projeto sem nodemon
// node index.js

// rodar o projeto com nodemon
// nodemon index.js