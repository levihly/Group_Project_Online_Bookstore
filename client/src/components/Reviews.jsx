import React from 'react';

function Reviews({ reviews }) {
  return (
    <div className="reviews">
      <h2>Reviews for this Book:</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className="review">
            <p><strong>{review.userName}</strong> rated {review.rating}/5</p>
            <p>{review.reviewText}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Reviews;
