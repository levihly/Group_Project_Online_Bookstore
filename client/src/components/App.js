import React from 'react';
import Header from './Header'; // Import from the components folder
import Footer from "./Footer";
import MainContent from './MainContent';
import Container from './Container';

import AllBooks from './pages/AllBooks';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/all-books" element={<AllBooks />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
