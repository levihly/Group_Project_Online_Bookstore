import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

const base_url = process.env.REACT_APP_API_URL;

function ShowBookDetails() {
  const [book, setBook] = useState({});
  const { id } = useParams();
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    const getBook = async () => {
      try {
        const url = `${base_url}/${id}`;
        const {data} = await axios.get(url);

        setBook(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    getBook();
  }, []);

  const handleReviewSubmitted = (newReview) => {
    setReviews((prevReviews) => {
      const bookReviews = prevReviews[newReview.id] || [];
      return {
        ...prevReviews,
        [newReview.bookId]: [...bookReviews, newReview],
      };
    });
  };

  console.log(book.genre);

  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="flex-container">
        <div className="flex-child-image">
          <img className="book-cover-details" src={book.image}/>
        </div>
        <div className="flex-child-details">
          <h1>{book.title}</h1>
          <h2>by {book.author}</h2>
          <div className="rating">
            <img src="https://i.imgur.com/mVp2ecx.png"/>
            {book.rating}
          </div>
          <p>Genre:
          {(book.genre) ? (book.genre).map((genre) => (
            <span className="genre-tag">{genre}</span>
          )) : null}
          </p>
          <p>Published: {book.year}</p>
        </div>
        <div className="details-summary">
          <p><b>Summary</b></p>
          <p className="details-summary-text">{book.summary}</p>
        </div>
      </div>
      <ReviewForm />

      <Footer />
    </div>
  )
}

export default ShowBookDetails;
