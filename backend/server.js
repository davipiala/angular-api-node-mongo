console.log('Inicalizando o NodeJS')

const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')

var db

app.use(bodyParser.urlencoded({ extended: true }))


MongoClient.connect('mongodb://@localhost:27017/mongo', (err, client) => {
  if (err) return console.log(err)
  db = client.db('mongo')
  app.listen(3000, function() {
    console.log('Rodando na porta 3000')
  })
})


app.get('/', (req, res) => {

    db.collection('data').find().toArray(function(err, results) {
        res.send(results)
      })
      
      
    
})
  

app.post('/', (req, res) => {
    console.log('POST')
    db.collection('data').save(req.body, (err, result) => {
        console.log('Salvando no banco')
    })
    res.redirect('/')
    
})
