const Poc = require('../model/poc.model');

//Criando um poc
exports.create = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Favor preencher os dados do Poc"
        });
    }

    const poc = new Poc({
        id: req.body.id, 
        codigoOpp: req.body.codigoOpp, 
        valorOpp: req.body.valorOpp, 
        dataAbertura: req.body.dataAbertura, 
        dataFechamento: req.body.dataFechamento, 
        sponsor: req.body.sponsor, 
        vendedor: req.body.vendedor, 
        manager: req.body.manager,
        arquiteto: req.body.arquiteto,
        scs: req.body.scs,
        notes: req.body.notes
    });
    poc.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

//Listando todos os pocs
exports.findAll = (req, res) => {
    Poc.find()
    .then(pocs => {
        res.send(pocs);
    }).catch(err => {
        res.status(500).send({
            message: err.message 
        });
    });
};

//Listando um poc
exports.findOne = (req, res) => {
    Poc.findById(req.params.pocId)
    .then(poc => {
        if(!poc) {
            return res.status(404).send({
                message: "Poc nao encontrado " + req.params.pocId
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.pocId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.pocId
        });
    });
};

//Atualizar o Poc
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Poc nao pode ser vazio"
        });
    }
};
//Remover o poc
exports.delete = (req, res) => {
    Poc.findByIdAndRemove(req.params.pocId)
    .then(poc => {
        if(!poc) {
            return res.status(404).send({
                message: "Poc nao encontrado " + req.params.pocId
            });
        }
        res.send({message: "Poc removido"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.pocId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.pocId
        });
    });
};



