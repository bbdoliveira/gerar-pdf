const express = require('express')
const app = express()

app.get('/', (request, response) => {
    return response.send('Sua Página')
})

app.listen(3000)