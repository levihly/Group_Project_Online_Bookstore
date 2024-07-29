const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String},
  genre: { type: [String] },
  year: { type: Number },
  summary: { type: String },
  rating: { type: Number },
  keywords: { type: [String] },
});

module.exports = mongoose.model('book', bookSchema);
