module.exports = (app) => {
    const scs = require('../controllers/scs-controler');
   
    app.post('/api/scs', scs.create);
    app.get('/api/scs', scs.findAll);
    app.get('/api/scs/:scId', scs.findOne);
    app.put('/api/scs/:scId', scs.update);
    app.delete('/api/scs/:scId', scs.delete);
}