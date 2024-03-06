import React from "react";
import styled, { css } from "styled-components";

const FacilityContent = styled.div`
  background-color: white;
  display: flex;
  width: 23%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }

  @media only screen and (max-width: 768px) {
    width: 45%;
  }

  @media only screen and (max-width: 480px) {
    width: 90%;
  }
`;

const FacilityImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 8px;
`;

const FacilityInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const FacilityName = styled.h3`
  margin: 0 0 8px 0;
  font-weight: bold;
  color: #333;
`;

const ReservationDate = styled.p`
  margin: 8px 0;
  font-weight: bold;
`;

const ReservationTime = styled.p`
  margin: 8px 0;
  font-weight: bold;
`;

const CompletionStatus = styled.p`
  margin: 8px 0;
  font-weight: bold;
  ${(props) =>
    props.isCompleted
      ? css`
          color: #4caf50;
        `
      : css`
          color: #ff9800;
        `}
`;

const MyFacilityContent = ({
  img_url,
  facilityName,
  reservationDate,
  reservationTime,
  isCompleted,
}) => {
  return (
    <FacilityContent>
      <FacilityImage src={img_url} alt={facilityName} />
      <FacilityInfo>
        <FacilityName>{facilityName}</FacilityName>
        <ReservationDate>예약 일자: {reservationDate}</ReservationDate>
        <ReservationTime>예약 시간: {reservationTime}</ReservationTime>
        <CompletionStatus isCompleted={isCompleted}>
          {isCompleted ? "사용 완료" : "사용 대기"}
        </CompletionStatus>
      </FacilityInfo>
    </FacilityContent>
  );
};

export default MyFacilityContent;
