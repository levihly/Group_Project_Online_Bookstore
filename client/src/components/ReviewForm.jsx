import React, { useState } from 'react';

function ReviewForm({ bookId, onReviewSubmitted }) {
  const [userName, setUserName] = useState('');
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      bookId,
      userName,
      rating,
      reviewText,
    };
    onReviewSubmitted(review);
    setUserName('');
    setRating(0);
    setReviewText('');
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h2>Add a Review</h2>
      <label>
        Name:
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </label>
      <label>
        Rating:
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          min="1"
          max="5"
          required
        />
      </label>
      <label>
        Review:
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
