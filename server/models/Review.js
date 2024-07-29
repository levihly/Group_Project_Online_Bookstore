const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'book', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  reviewText: { type: String, required: true },
  rating: { type: Number, required: true },
});

module.exports = mongoose.model('review', reviewSchema);
