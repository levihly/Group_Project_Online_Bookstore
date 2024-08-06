import React from "react";
import Grid from "@material-ui/core/Grid";

function BookList({ books, onBookClick }) {
  return (
    <div className="book-list">
      <Grid container spacing={3}>
        {books.map((book) => (
          <Grid item md={3} key={book._id}>
            <img
              className="book-cover"
              src={book.image}
              alt={book.title}
              onClick={() => onBookClick(book)}
              style={{ cursor: "pointer" }}
            />
            <p><i>{book.title}</i></p>
            <p>by {book.author}</p>
            <p>{book.rating}</p>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default BookList;
