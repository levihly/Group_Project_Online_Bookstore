import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const base_url = process.env.REACT_APP_API_URL;

function ShowBookDetails() {
  const [book, setBook] = useState({});
  const { id } = useParams();

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

  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="details-container">
        <div className="details-container-child-left">
          <img className="book-cover-details" src={book.image}/>
        </div>
        <div className="details-container-child-right">
          <h1>{book.title}</h1>
          <h2>by {book.author}</h2>
          <p>({book.rating})</p>
          <p>Genre: {book.genre}</p>
          <p>Published: {book.year}</p>
        </div>
        <div className="details-summary">
          <p><b>Summary</b></p>
          <p className="details-summary-text">{book.summary}</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ShowBookDetails;
