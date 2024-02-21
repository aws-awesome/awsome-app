import React from 'react';
import './MyFacilityContent.css'; // CSS 파일 임포트

const MyFacilityContent = ({ facilityImageUrl, facilityName, reservationDate, reservationTime, isCompleted }) => {
  return (
    <div className="facility-content">
      <img src={facilityImageUrl} alt={facilityName} className="facility-image"/>
      <div className="facility-info">
        <h3 className="facility-name">{facilityName}</h3>
        <p className="reservation-date">예약 일자: {reservationDate}</p>
        <p className="reservation-time">예약 시간: {reservationTime}</p>
        <p className={`completion-status ${isCompleted ? 'completed' : 'pending'}`}>
          {isCompleted ? '사용 완료' : '사용 대기'}
        </p>
      </div>
    </div>
  );
};

export default MyFacilityContent;
