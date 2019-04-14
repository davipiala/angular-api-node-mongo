const mongoose = require('mongoose');

const SalesConsultantSchema = mongoose.Schema({
    id: Number,
    nome: String,
    email: String}, {
    timestamps: true
});

module.exports = mongoose.model('SalesConsultantSchema', SalesConsultantSchema);