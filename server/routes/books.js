const router = require("express").Router();
const Book = require("../models/Book");
const books = require("../config/books.json");


router.get("/books", async (req, res) => {
  try {
    const search = req.query.search || "";
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

    // search functionality
    genre === "All"
      ? (genre = [...genres])
      : (genre = req.query.genre.split(","));
    req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

    // sorting order
    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = "asc";
    }

    // get books
    const books = await Book.find({ title: { "$regex": search, "$options": "i" }})
      .where("genre")
      .in([...genre])
      .sort(sortBy);


    const response = {
      error: false,
      genreOptions: genres,
      books,
    };

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal error" });
  }
});

const insertBooks = async () => {
  try {
    // deletes old Database
    await Book.deleteMany({});

    const docs = await Book.insertMany(books);
    return Promise.resolve(docs);
  } catch (err) {
    return Promise.reject(err);
  }
};

insertBooks()
  .then((docs) => console.log(docs))
  .catch((err) => console.log(err));


module.exports = router;
