import React from 'react';
import './bestBook.css'; // CSS 파일 임포트

const BestBook = ({ imageUrl, title, author }) => {
  return (
    <div className="best-book">
      <img src={imageUrl} alt={title} className="book-image" />
      <h2 className="book-title">{title}</h2>
      <p className="book-author">{author}</p>
    </div>
  );
};

export default BestBook;
