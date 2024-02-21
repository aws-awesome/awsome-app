import React from 'react';
import './MyBookContent.css'; // CSS 파일 임포트

const MyBookContent = ({ bookImageUrl, returnDeadline, isOverdue }) => {
  return (
    <div className="book-content">
      <img src={bookImageUrl} alt="Book Cover" className="book-image"/>
      <div className="book-info">
        <p className="return-deadline">반납 기한: {returnDeadline}</p>
        <p className={`overdue-status ${isOverdue ? 'overdue' : ''}`}>
          {isOverdue ? '연체 중' : '연체 없음'}
        </p>
      </div>
    </div>
  );
};

export default MyBookContent;
