import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookList from './BookList';
import Search from './Search';
import Sort from './Sort';
import GenreFilter from './GenreFilter';
import RatingFilter from './RatingFilter';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

const base_url = process.env.REACT_APP_API_URL;

function Home() {
  const [book, setBooks] = useState({});
  const [sort, setSort] = useState({ sort: "rating", order: "desc" });
  const [genreFilter, setGenreFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [reviews, setReviews] = useState({}); 

  useEffect(() => {
    const getBooks = async () => {
      try {
        const url = `${base_url}?sort=${sort.sort},${sort.order}&genre=${genreFilter.toString()}&search=${search}`;
        const { data } = await axios.get(url);
        setBooks(data);
      } catch (err) {
        console.log(err);
      }
    };

    getBooks();
  }, [sort, genreFilter, search]);

  const handleBookClick = (book) => {
    setSelectedBookId(book._id);
  };

  const handleReviewSubmitted = (newReview) => {
    setReviews((prevReviews) => {
      const bookReviews = prevReviews[newReview.bookId] || [];
      return {
        ...prevReviews,
        [newReview.bookId]: [...bookReviews, newReview],
      };
    });
  };

  return (
    <div>
      <h1>Welcome to the bookstore!</h1>
      <Search setSearch={setSearch} />
      <Sort sort={sort} setSort={setSort} />
      <GenreFilter
        genreOptions={book.genreOptions ? book.genreOptions : []}
        genreFilter={genreFilter}
        setGenreFilter={setGenreFilter}
      />
      <div>
        <BookList books={book.books ? book.books : []} onBookClick={handleBookClick} />
      </div>
      {selectedBookId && (
        <>
          <ReviewForm bookId={selectedBookId} onReviewSubmitted={handleReviewSubmitted} />
          <Reviews reviews={reviews[selectedBookId] || []} />
        </>
      )}
    </div>
  );
}

export default Home;
