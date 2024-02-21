import React from 'react';
import './facility.css'; // 스타일 시트 임포트

const Facility = ({ title, imageUrl, isAvailable }) => {
  return (
    <div className="facility-container">
      <h2 className="facility-title">{title}</h2>
      <img src={imageUrl} alt={title} className="facility-image" />
      <p className="facility-availability">{isAvailable ? '예약 가능' : '예약 불가능'}</p>
    </div>
  );
};

export default Facility;
