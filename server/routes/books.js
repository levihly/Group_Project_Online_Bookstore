const router = require("express").Router();
const Book = require("../models/Book");
const books = require("../config/books.json");
var mongoose = require('mongoose');

// gets all of the book data from the database
router.get("/books", async (req, res) => {
  try {
    // gets input values for search, sort, genre, otherwise sets defaults
    let search = req.query.search || "";
    let sort = req.query.sort || "rating";
    let genre = req.query.genre || "All";

    const genres = [
      "Action",
      "Adventure",
      "Children's",
      "Classics",
      "Drama",
      "Fantasy",
      "Fiction",
      "Graphic Novels",
      "Horror",
      "Manga",
      "Mystery",
      "Nonfiction",
      "Romance",
      "Sci-fi",
      "Thriller",
      "Young Adult",
    ];

    // genre filter
    genre === "All"
      ? (genre = [...genres])
      : (genre = req.query.genre.split(","));

    // gets sort method and order
    req.query.sort
      ? (sort = req.query.sort.split(","))
      : (sort = [sort]);

    // sorting order variable
    let sortBy = {};

    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = "asc";
    }

    // finds books from database based on search
    const books = await Book.find({
      $or: [
        {"title": { "$regex": search, "$options": "i" }},
        {"author": { "$regex": search, "$options": "i" }},
        {"genre": { "$regex": search, "$options": "i" }},
        {"summary": { "$regex": search, "$options": "i" }},
        {"keywords": { "$regex": search, "$options": "i" }},
      ]
    })
      // for filtering and sorting
      .where("genre")
      .in([...genre])
      .sort(sortBy);

    // creates response with no error, array of genres, and array of books
    const response = {
      error: false,
      genreOptions: genres,
      books,
    };

    // sends response as json to api
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal error" });
  }
});

// gets specific book
router.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Book.findById(id);

    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});


// updates database with books from .json
const insertBooks = async () => {
  try {
    // deletes old Database
    await Book.deleteMany({});
    // inserts from .json
    const docs = await Book.insertMany(books);
    return Promise.resolve(docs);
  } catch (err) {
    return Promise.reject(err);
  }
};

// run to update database
// insertBooks()
//   .then((docs) => console.log(docs))
//   .catch((err) => console.log(err));


module.exports = router;
