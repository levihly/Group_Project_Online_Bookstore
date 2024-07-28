const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Book = require('./models/book');
const User = require('./models/user');
const Review = require('./models/review');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/online-bookstore');

app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Online Bookstore');
  });

// get request for all books
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).send(err);
  }
});

// get request for all users
app.get('/api/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).send(err);
    }
  });

// get request for all reviews
app.get('/api/reviews', async (req, res) => {
    try {
      const users = await User.find();
      res.json(reviews);
    } catch (err) {
      res.status(500).send(err);
    }
  });

// get request for a specific book
app.get('/api/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
  } catch (err) {
    res.status(500).send(err);
  }
});

// get request for a specific user
app.get('/api/users/:id', async (req, res) => {
    try {
      const user = await Book.findById(req.params.id);
      if (!user) return res.status(404).send('User not found');
      res.json(user);
    } catch (err) {
      res.status(500).send(err);
    }
  });

// create a new book
app.post('/api/books', async (req, res) => {
  const book = new Book(req.body);
  try {
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).send(err);
  }
});

// create a new user
app.post('/api/users', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// create a new review
app.post('/api/reviews', async (req, res) => {
  const review = new Review(req.body);
  try {
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});