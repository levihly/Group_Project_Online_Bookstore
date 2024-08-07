const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  reviewText: { type: String, required: true },
});

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String},
  genre: { type: [String] },
  year: { type: Number },
  summary: { type: String },
  rating: { type: Number },
  keywords: { type: [String] },
  reviews: { type: [reviewSchema] }
});

module.exports = mongoose.model('book', bookSchema);
