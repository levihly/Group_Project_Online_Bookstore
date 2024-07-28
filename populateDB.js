const mongoose = require('mongoose');
const User = require('./models/user');
const Book = require('./models/book');
const Review = require('./models/review');
const sampleBooks = require('./sampleBooks');
const sampleUsers = require('./sampleUsers');
const sampleReviews = require('./sampleReviews');

mongoose.connect('mongodb://localhost:27017/online-bookstore');

async function populateDatabase() {
    try {
      // clear current collections
      await User.deleteMany({});
      await Book.deleteMany({});
      await Review.deleteMany({});
      
      // insert sample users and books
      const users = await User.insertMany(sampleUsers);
      const books = await Book.insertMany(sampleBooks);
      
      // map to object IDs
      const userMap = new Map(users.map(user => [user.email, user._id]));
      const bookMap = new Map(books.map(book => [book.title, book._id]));
      
      const updatedReviews = sampleReviews.map(review => ({
        ...review,
        book: bookMap.get(review.bookTitle),
        user: userMap.get(review.userEmail)  
      }));
      
      // insert sample reviews
      await Review.insertMany(updatedReviews);
  
      console.log('Database populated successfully!');
    } catch (err) {
      console.error('Error populating database:', err);
    } finally {
      mongoose.connection.close();
    }
  }
  
  populateDatabase();