import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearch from './components/BookSearch';
import Bookshelf from './components/Bookshelf';

function App() {
  const [bookshelf, setBookshelf] = useState(() => {
    // Load initial state from localStorage
    const savedBookshelf = localStorage.getItem('bookshelf');
    return savedBookshelf ? JSON.parse(savedBookshelf) : [];
  });

  useEffect(() => {
    // Save bookshelf to localStorage whenever it changes
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  }, [bookshelf]);

  const addToBookshelf = (book) => {
    if (!bookshelf.some(b => b.key === book.key)) {
      setBookshelf([...bookshelf, book]);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookSearch addToBookshelf={addToBookshelf} bookshelf={bookshelf} />} />
        <Route path="/bookshelf" element={<Bookshelf bookshelf={bookshelf} />} />
      </Routes>
    </Router>
  );
}

export default App;
