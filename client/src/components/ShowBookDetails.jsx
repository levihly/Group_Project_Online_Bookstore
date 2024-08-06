import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
      <img className="book-cover" src={book.image}/>
      <p>{book.title}</p>
      <p>{book.author}</p>
      <p>{book.rating}</p>
      <p>{book.genre}</p>
      <p>{book.year}</p>
      <p>{book.summary}</p>
    </div>
  )
}

export default ShowBookDetails;
