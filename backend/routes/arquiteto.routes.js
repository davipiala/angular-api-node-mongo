module.exports = (app) => {
    const arquitetos = require('../controllers/arquitetos-controller');
   
    app.post('/api/arquitetos', arquitetos.create);
    app.get('/api/arquitetos', arquitetos.findAll);
    app.get('/api/arquitetos:arquitetoId', arquitetos.findOne);
    app.put('/api/arquitetos/:arquitetoId', arquitetos.update);
    app.delete('/api/arquitetos/:arquitetoId', arquitetos.delete);
}