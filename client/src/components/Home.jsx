import React, {useEffect, useState} from "react";
import axios from "axios";
import BookList from "./BookList";

const base_url = process.env.REACT_APP_API_URL;

function Home() {
  const [book, setBooks] = useState({});
  const [sort, setSort] = useState({ sort: "rating", order: "desc" });
  const [genreFilter, setGenreFilter] = useState([]);
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
      <h1>Welcome to the bookstore!</h1>

      <div>
        <BookList books={book.books ? book.books : []} />
      </div>
    </div>
  );
}

export default Home;