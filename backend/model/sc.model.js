const mongoose = require('mongoose');

const SalesConsultantSchema = mongoose.Schema({
    nome: String,
    email: String}, {
    timestamps: true
});

module.exports = mongoose.model('SalesConsultantSchema', SalesConsultantSchema);