module.exports = (app) => {
    const pocs = require('../controllers/pocs-controller');
   
    app.post('/api/pocs', pocs.create);
    app.get('/api/pocs', pocs.findAll);
    app.get('/api/pocs:pocId', pocs.findOne);
    app.put('/api/pocs/:pocId', pocs.update);
    app.delete('/api/pocs/:pocId', pocs.delete);
}