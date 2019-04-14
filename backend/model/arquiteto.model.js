const mongoose = require('mongoose');

const ArquitetoSchema = mongoose.Schema({
    id: Number,
    nome: String,
    email: String}, {
    timestamps: true
});

module.exports = mongoose.model('ArquitetoSchema', ArquitetoSchema);