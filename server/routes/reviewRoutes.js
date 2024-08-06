const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Create a new review
router.post('/reviews', async (req, res) => {
  try {
    const { bookId, userName, rating, reviewText } = req.body;
    const review = new Review({ book: bookId, userName, rating, reviewText });
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get reviews for a specific book
router.get('/reviews/:bookId', async (req, res) => {
  try {
    const reviews = await Review.find({ book: req.params.bookId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
