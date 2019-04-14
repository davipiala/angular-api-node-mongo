const SalesConsultant = require('../model/sc.model');

//Criando um sc
exports.create = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Favor preencher os dados do SalesConsultant"
        });
    }

    const sc = new SalesConsultant({
        nome: req.body.nome, 
        email: req.body.email
    });
    sc.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

//Listando todos os scs
exports.findAll = (req, res) => {
    SalesConsultant.find()
    .then(scs => {
        res.send(scs);
    }).catch(err => {
        res.status(500).send({
            message: err.message 
        });
    });
};

//Listando um sc
exports.findOne = (req, res) => {
    SalesConsultant.findById(req.params.scId)
    .then(sc => {
        if(!sc) {
            return res.status(404).send({
                message: "SalesConsultant nao encontrado " + req.params.scId
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.scId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.scId
        });
    });
};

//Atualizar o SalesConsultant
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "SalesConsultant nao pode ser vazio"
        });
    }
};
//Remover o sc
exports.delete = (req, res) => {
    SalesConsultant.findByIdAndRemove(req.params.scId)
    .then(sc => {
        if(!sc) {
            return res.status(404).send({
                message: "SalesConsultant nao encontrado " + req.params.scId
            });
        }
        res.send({message: "SalesConsultant removido"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.scId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.scId
        });
    });
};



