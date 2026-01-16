const express = require('express')


const app = express()
app.use(express.json())
users = []


app.post('/users', (req, res) => {
    users.push(req.body)
    res.send('POST Concluido')
})

app.get('/users', (req, res) => {
res.json(users)
res.send('GET Concluido')
})



app.listen(3000);



// Port: 5432
//Password: Gabik0803
//


