"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CoHeader from "../../../components/common/coheader/coheader";
import CoFooter from "../../../components/common/cofooter/cofooter";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const FacilityInfoContainer = styled.div`
  background: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 80%;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FacilityName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FacilityText = styled.p`
  margin: 10px 0;
  font-size: 1.1rem;
  color: #333;
  font-weight: ${({ isBold }) => (isBold ? "bold" : "normal")};
`;

const TimeSlotContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TimeSlotButton = styled.button`
  padding: 10px;
  background-color: ${({ isSelected, isAvailable }) =>
    isSelected ? "#0288D1" : isAvailable ? "green" : "#B0BEC5"};
  color: ${({ isAvailable }) => (isAvailable ? "white" : "#777")};
  cursor: ${({ isAvailable }) => (isAvailable ? "pointer" : "default")};
  margin: 5px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ isAvailable }) =>
      isAvailable ? "#0288D1" : "#B0BEC5"};
  }
`;

const ReserveButton = styled.button`
  padding: 10px 20px;
  background-color: rgb(25, 150, 255);
  color: white;
  margin: 2%;
  text-align: center;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;
  &:hover {
    background-color: #0056b3;
  }
`;

const ConfirmModal = styled.div`
  position: fixed;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  font-weight: bold;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

const FaReservePage = () => {
  const router = useRouter();
  const [facilityAndReservationData, setFacilityAndReservationData] =
    useState(null);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [studentId, setStudentId] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn !== "true") {
      router.push("/login");
    } else {
      const studentIdFromStorage = localStorage.getItem("studentId");
      setStudentId(studentIdFromStorage);
    }

    const facility_id = "Web";

    if (!facilityAndReservationData) {
      // 데이터가 없을 때만 호출
      setIsLoading(true);

      const fetchFacilityAndReservationData = async () => {
        try {
          const facilityResponse = await fetch(
            `https://p530mrhup5.execute-api.ap-northeast-2.amazonaws.com/getFacilityByFacilityId?facility_id=${facility_id}`
          );
          const facilityData = await facilityResponse.json();

          const reservationResponse = await fetch(
            `https://p530mrhup5.execute-api.ap-northeast-2.amazonaws.com/getTodayReservationByFacilityID?facility_id=${facility_id}`
          );
          const reservationData = await reservationResponse.json();

          const slots = Object.entries(reservationData[0]).map(
            ([key, value]) => ({
              time: `${key.substring(0, 2)}:00 - ${key.substring(2)}:00`,
              isAvailable: value === "true",
            })
          );

          setFacilityAndReservationData({
            facilityData: facilityData[0],
            slots,
          });
        } catch (error) {
          console.error("데이터 가져오기 실패:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchFacilityAndReservationData();
    }
  }, []);

  const toggleTimeSlotSelection = (timeSlot) => {
    if (selectedTimeSlots.includes(timeSlot)) {
      setSelectedTimeSlots(
        selectedTimeSlots.filter((slot) => slot !== timeSlot)
      );
    } else {
      setSelectedTimeSlots([...selectedTimeSlots, timeSlot]);
    }
  };

  const handleReserve = async () => {
    if (selectedTimeSlots.length > 0) {
      setShowModal(true);
    }
  };

  const confirmReservation = async () => {
    try {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");

      const student_id = localStorage.getItem("studentId");
      const facility_id = "Web";

      const start_date = `${yyyy}-${mm}-${dd}`;

      const start_time = selectedTimeSlots[0].split(" - ")[0];

      const end_time =
        selectedTimeSlots[selectedTimeSlots.length - 1].split(" - ")[1];

      const url = `https://p530mrhup5.execute-api.ap-northeast-2.amazonaws.com/postReservation?student_id=${student_id}&facility_id=${facility_id}&start_time=${encodeURIComponent(
        start_date + " " + start_time
      )}&end_time=${encodeURIComponent(start_date + " " + end_time)}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Reservation created successfully!");

        setSelectedTimeSlots([]);

        const updatedTimeSlots = facilityAndReservationData.slots.map(
          (slot) => {
            if (selectedTimeSlots.includes(slot.time)) {
              return { ...slot, isAvailable: false };
            }
            return slot;
          }
        );
        setFacilityAndReservationData({
          facilityData: facilityAndReservationData.facilityData,
          slots: updatedTimeSlots,
        });

        setShowModal(false);
        alert("예약이 완료되었습니다!");
      } else {
        console.error("Failed to create reservation.");
      }
    } catch (error) {
      console.error("Error creating reservation:", error);
    }
  };

  const cancelReservation = () => {
    setShowModal(false);
    alert("예약이 취소되었습니다.");
  };

  return (
    <>
      <CoHeader />
      <PageContainer>
        <FacilityInfoContainer>
          <FacilityName>
            {facilityAndReservationData?.facilityData?.facility_id}
          </FacilityName>
          <img
            src={facilityAndReservationData?.facilityData?.img_url}
            alt="시설 이미지"
            className="mb-5"
          />
          <FacilityText isBold>
            수용 인원: {facilityAndReservationData?.facilityData?.capacity}
          </FacilityText>
          <FacilityText isBold>
            위치: {facilityAndReservationData?.facilityData?.location}
          </FacilityText>
          <TimeSlotContainer>
            {facilityAndReservationData?.slots.map(
              ({ time, isAvailable }, index) => (
                <TimeSlotButton
                  key={index}
                  isSelected={selectedTimeSlots.includes(time)}
                  isAvailable={isAvailable}
                  onClick={() => isAvailable && toggleTimeSlotSelection(time)}
                >
                  {time}
                </TimeSlotButton>
              )
            )}
          </TimeSlotContainer>
          <ReserveButton onClick={handleReserve}>예약</ReserveButton>
        </FacilityInfoContainer>
      </PageContainer>
      {showModal && (
        <>
          <Overlay onClick={() => setShowModal(false)} />
          <ConfirmModal>
            <h2>예약 확인</h2>
            <p>{selectedTimeSlots.join(", ")} 예약하시겠습니까?</p>
            <ReserveButton onClick={confirmReservation}>확인</ReserveButton>
            <ReserveButton onClick={cancelReservation}>취소</ReserveButton>
          </ConfirmModal>
        </>
      )}
      <CoFooter />
    </>
  );
};

export default FaReservePage;
