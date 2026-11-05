const mongoose = require('mongoose');

const acaraSchema = new mongoose.Schema({
  kodeAcara: {
    type: String,
    required: true,
    trim: true
  },

  jenis: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },

  namaAcara : {
    type: String,
    required: true,
    trim: true
  },

  kuota: {
    type: Number,
    required: true,
    min: 1
  },

  
}, {
  timestamps: true
});

module.exports = mongoose.model('Acara', acaraSchema);