const mongoose = require('mongoose');
require('./arquiteto.model')
require('./sc.model')
require('./note.model')

const PocSchema = mongoose.Schema({
    id: Number,
    codigoOpp: String,
    valorOpp: Number,
    dataAbertura: Date,
    dataFechamento: Date,
    sponsor: String,
    vendedor: String, 
    manager: String,
    arquiteto: {
        type: Object,
        ref: 'ArquitetoSchema',
        required: true
    },
    scs:[{
        type: Object,
        ref: 'SalesConsultantSchema',
        required: true
    }],
    notes:[{
        type: Object,
        ref: 'NoteSchema',
        required: true
    }]

}, {
    timestamps: true
});

module.exports = mongoose.model('PocSchema', PocSchema);