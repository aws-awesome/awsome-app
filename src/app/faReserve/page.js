"use client";
import React, { useState } from "react";
import CoHeader from "../../components/common/coheader/coheader";
import CoFooter from "../../components/common/cofooter/cofooter";
import TitleComponent from "@/components/common/title/title";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  margin: 3%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px); /* Adjust based on header/footer height */
`;

const FacilityContainer = styled.div`
  width: 40%;
  max-width: 70%;
  margin: 20px auto;
  padding: 3%;
  border: 1px solid #f0f0f0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: #fff;
  text-align: center;
`;

const FacilityImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  padding: 3%;
`;

const FacilityName = styled.h2`
  margin-top: 10px;
  font-size: 24px;
  color: #333;
  padding: 3%;
`;

const TimeSlotButton = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#4CAF50")};
  color: white;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#45a049")};
  }
  padding: 3%;
`;

const BookButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px 0;
  margin-top: 20px;
  background-color: #008cba;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #007b9a;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 400px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

// 임시 시간대 데이터 (예약 가능 여부는 임의로 설정)
const timeSlots = [
  { time: "09:00 - 10:00", available: true },
  { time: "10:00 - 11:00", available: false },
  { time: "11:00 - 12:00", available: true },
  { time: "12:00 - 13:00", available: true },
  { time: "13:00 - 14:00", available: false },
  { time: "14:00 - 15:00", available: true },
  { time: "15:00 - 16:00", available: true },
  { time: "16:00 - 17:00", available: false },
  { time: "17:00 - 18:00", available: false },
  // 추가 시간대 가능...
];

const FaReservePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [reservedTimes, setReservedTimes] = useState([]); // 예약된 시간대를 관리하는 상태

  // 예약 확인 및 예약 처리 함수
  const confirmReservation = () => {
    setReservedTimes((prevReservedTimes) => [
      ...prevReservedTimes,
      selectedTime,
    ]);
    setShowModal(false); // 모달 닫기
    alert("예약이 완료되었습니다."); // 사용자에게 예약 완료 알림
  };

  // 예약 가능 여부 확인 함수
  const isTimeSlotReserved = (time) => reservedTimes.includes(time);

  // 임시 시설 데이터
  const facilityData = {
    title: "CLASS 1", // 백엔드에서 받아올 실제 데이터 대신 사용
    imageUrl: "https://via.placeholder.com/400", // 예시 이미지 URL
  };

  const handleBookClick = () => {
    if (selectedTime) {
      setShowModal(true);
    } else {
      alert("시간대를 선택해주세요.");
    }
  };

  return (
    <>
      <CoHeader />
      <PageContainer>
        <FacilityContainer>
          <TitleComponent title="Facility Reservaion" />
          <div>※ 재학생만 시설예약 가능합니다.</div>
          <FacilityName>{facilityData.title}</FacilityName>
          <FacilityImage src={facilityData.imageUrl} alt="Facility" />
          {timeSlots.map((slot, index) => (
            <TimeSlotButton
              key={index}
              disabled={!slot.available || isTimeSlotReserved(slot.time)}
              onClick={() => {
                setSelectedTime(slot.time);
                slot.available && setShowModal(true);
              }}
            >
              {slot.time}
            </TimeSlotButton>
          ))}
        </FacilityContainer>
        {showModal && (
          <Modal>
            <p>{`선택한 시간 ${selectedTime}에 예약하시겠습니까?`}</p>
            <BookButton onClick={confirmReservation}>예약 확인</BookButton>
          </Modal>
        )}
      </PageContainer>
      <CoFooter />
    </>
  );
};

export default FaReservePage;
