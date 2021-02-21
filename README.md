# Como exportar um PDF com NodeJs

* [] Porque eu preciso exportar um PDF?
* [] Existem outras ferramentas?
* [] Porque eu vou usar o NodeJs?

# O que vamos aprender aqui?
* [] NodeJS
* [] Criar um servidor com uma rota
* [] Usar um template engine
* [] Usar callbacks

# Bora codar?
* [x] Iniciar o projeto com NPM
* [x] Instalar dependencias 'express ejs html-pdf'
    * npm install express ejs html-pdf
* [x] Iniciar o servidor
    * Cria uma pasta src/server.js
    * Dentro do server.js
        - const express = require('express')
        - const app = express()
        - app.listen(3000)
    * Executar o comando (node src/server.js), para iniciar o server
* [x] Criar uma rota da aplicação
    * [x] Entender request, response
    * [x] Primeiro entendimento de callback
    * [] Está confuso sobre HTTP? Discover
* [x] Criar uma lista de dados para criar o relatório
* [] Criar um HTML
* [] Mostrar na rota
* [] Enviar dados para o HTML (template engine)
* [] Segundo entendimento de callback
* [] Utilizar o html-pdf e configurar as opções
* [] Callback de novo?
* [] Gerar o arquivo
* [] 