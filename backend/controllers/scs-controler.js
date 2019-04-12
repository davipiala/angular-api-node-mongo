const SalesConsultant = require('../model/sc.model');

exports.create = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Favor preencher os dados do SC"
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
            message: err.message || "Falha ao criar SC."
        });
    });
};

//Listar todos os sales consultant
exports.find= (req, res) => {
    res.send(SalesConsultant.find());
};