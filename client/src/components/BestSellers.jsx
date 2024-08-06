import React from 'react';

const BestSellers = () => {
    const bestSellers = [
      { title: 'Book 1', image: 'images/book1.webp' }, // Replace with actual image paths
      { title: 'Book 2', image: 'images/book2.webp' },
      { title: 'Book 3', image: 'images/book3.webp' },
    ];
  
    return (
      <div className="best-sellers">
        <div className="bestsellers-text">
          <h2>Bestsellers!</h2>
          <button className="buy-now-button">Buy Now</button>
        </div>
        <div className="book-covers">
          {bestSellers.map((book, index) => (
            <img key={index} src={book.image} alt={book.title} className="book-cover" />
          ))}
        </div>
      </div>
    );
  };
  export default BestSellers;