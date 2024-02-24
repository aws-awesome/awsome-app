import React from "react";
import styled, { css } from "styled-components";

const FacilityContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #eee;
  padding-bottom: 10%;
  border-radius: 10px; // 추가된 둥근 모서리
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // 기본 그림자 효과를 약간 더 세련되게 조정
  transition: transform 0.3s ease, box-shadow 0.3s ease; // 부드러운 전환 효과 추가

  &:hover {
    transform: translateY(-2px); // 호버 시 카드를 위로 올림
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.1); // 호버 시 그림자 효과를 더 크게
  }
`;

const FacilityImage = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  margin-right: 5%;
  border-radius: 10px; // 이미지에도 둥근 모서리 적용
`;

const FacilityInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center; // 텍스트 중앙 정렬 추가
`;

const FacilityName = styled.h3`
  margin: 0 0 10% 0;
`;

const ReservationDate = styled.p`
  margin: 3% 0;
`;

const ReservationTime = styled.p`
  margin: 3% 0;
`;

const CompletionStatus = styled.p`
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
  facilityImageUrl,
  facilityName,
  reservationDate,
  reservationTime,
  isCompleted,
}) => {
  return (
    <FacilityContent>
      <FacilityImage src={facilityImageUrl} alt={facilityName} />
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
