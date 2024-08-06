import React, {useEffect, useState} from "react";
import axios from "axios";
import BookList from "./BookList";
import Search from "./Search";
import Sort from "./Sort";
import GenreFilter from "./GenreFilter";
import RatingFilter from "./RatingFilter";

import Header from "./Header";
import Footer from "./Footer";


const base_url = process.env.REACT_APP_API_URL;

function Home() {
  // default values
  const [book, setBooks] = useState({});
  const [sort, setSort] = useState({ sort: "rating", order: "desc" });
  const [genreFilter, setGenreFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getBooks = async () => {
      try {
        const url = `${base_url}?sort=${sort.sort},${sort.order}&genre=${genreFilter.toString()}&search=${search}`;
        const {data} = await axios.get(url);

        setBooks(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    getBooks();
  }, [sort, genreFilter, search]);

  return (
    <div>
      <header>
        <Header />
        <Search setSearch={(search) => setSearch(search)} />
      </header>
      <Sort sort={sort} setSort={(sort) => setSort(sort)} />
      <GenreFilter
        genreOptions={book.genreOptions ? book.genreOptions : []}
        genreFilter={genreFilter}
  			setGenreFilter={(genre) => setGenreFilter(genre)} />
      <div>
        <BookList books={book.books ? book.books : []} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
