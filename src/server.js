const express = require('express')
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
    return response.send(passengers)
})

app.listen(3000)