import React from 'react';
import './books.css'; // CSS 파일 임포트

const Books = ({ category, books }) => {
  return (
    <div className="books-category">
      <h2>{category}</h2>
      {books.map((book, index) => (
        <div key={index} className="book-item">
          <img src={book.imageUrl} alt={book.title} className="book-image" />
          <div className="book-title">{book.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Books;
