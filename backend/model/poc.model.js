const mongoose = require('mongoose');

const ArquitetoSchema = mongoose.Schema({
    nome: String,
    email: String}, {
    timestamps: true
});

module.exports = mongoose.model('ArquitetoSchema', ArquitetoSchema);