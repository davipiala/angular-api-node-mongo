console.log('Inicalizando o NodeJS')

const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')

var db

app.use(bodyParser.urlencoded({ extended: true }))


MongoClient.connect('mongodb://mongoadmin:secret@localhost:27017', (err, client) => {
  if (err) return console.log(err)
  db = client.db('pocs')
  app.listen(3000, function() {
    console.log('Rodando na porta 3000')
  })
})


app.get('/pocs/pocs', (req, res) => {
    db.collection('pocs').find().toArray(function(err, results) {
        res.send(results)
      })
})
  
app.post('/salesconsultants', (req, res) => {
    console.log('POST')
    db.collection('salesconsultants').save(req.body, (err, result) => {
        console.log('Salvando no banco')
    })
    res.redirect('/')
    
})
