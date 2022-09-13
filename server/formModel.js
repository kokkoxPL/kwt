const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  school: {
    type: String,
    required: true
  },
  schoolAddress: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('form', formSchema);