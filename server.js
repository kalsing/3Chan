const express = require('express')


const app = express()
app.use(express.json())


app.post('/users', (req, res) => {
    console.log(req.body)
    res.send('POST Concluido')
})

app.get('/users', (req, res) => {
    res.send('GET Concluido')
})



app.listen(3000);