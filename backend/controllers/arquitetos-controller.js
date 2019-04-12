const SalesConsultant = require('../model/sc.model');


exports.create = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Favor preencher os dados do SC"
        });
    }

    // Create a Product
    const sc = new Product({
        title: req.body.title || "No product title", 
        description: req.body.description,
        price: req.body.price,
        company: req.body.company
    });

    // Save Product in the database
    product.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the product."
        });
    });
};