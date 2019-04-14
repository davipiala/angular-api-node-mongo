const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    id: Number,
    atualizacao: String,
    dataAtualizacao: Date}, {
    timestamps: true
});

module.exports = mongoose.model('NoteSchema', NoteSchema);