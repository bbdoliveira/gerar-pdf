const express = require('express')
const ejs = require('ejs');
const path = require('path');
const app = express()

const passengers = [
    {
        name: "Joyce",
        flighNumber: 7859,
        time: "18:00",
    },
    {
        name: "Brock",
        flighNumber: 7859,
        time: "18:00",
    },
    {
        name: "Eve",
        flighNumber: 7859,
        time: "18:00",
    },
];

app.get('/', (request, response) => {

    const filePath = path.join(__dirname, "print.ejs")

    ejs.renderFile(filePath, { passengers }, (err, data) => {
        if (err) {
            return response.send('Erro na leitura do arquivo')
        }
    })

    return response.send(passengers)
})

app.listen(3000)