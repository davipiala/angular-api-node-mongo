const Arquiteto = require('../model/arquiteto.model');

//Criando um arquiteto
exports.create = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Favor preencher os dados do Arquiteto"
        });
    }

    const arquiteto = new Arquiteto({
        nome: req.body.nome, 
        email: req.body.email
    });
    arquiteto.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

//Listando todos os arquitetos
exports.findAll = (req, res) => {
    Arquiteto.find()
    .then(arquitetos => {
        res.send(arquitetos);
    }).catch(err => {
        res.status(500).send({
            message: err.message 
        });
    });
};

//Listando um arquiteto
exports.findOne = (req, res) => {
    Arquiteto.findById(req.params.arquitetoId)
    .then(arquiteto => {
        if(!arquiteto) {
            return res.status(404).send({
                message: "Arquiteto nao encontrado " + req.params.arquitetoId
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.arquitetoId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.arquitetoId
        });
    });
};

//Atualizar o Arquiteto
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Arquiteto nao pode ser vazio"
        });
    }
};
//Remover o arquiteto
exports.delete = (req, res) => {
    Arquiteto.findByIdAndRemove(req.params.arquitetoId)
    .then(arquiteto => {
        if(!arquiteto) {
            return res.status(404).send({
                message: "Arquiteto nao encontrado " + req.params.arquitetoId
            });
        }
        res.send({message: "Arquiteto removido"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.arquitetoId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.arquitetoId
        });
    });
};



