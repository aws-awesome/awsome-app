"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CoHeader from "../../components/common/coheader/coheader";
import CoFooter from "../../components/common/cofooter/cofooter";
import TitleComponent from "../../components/common/title2/title2";
import MyBookContent from "@/components/my/MybookContent/MyBookContent";
import MyFacilityContent from "../../components/my/MyFacilityContent/MyFacilityContent";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f4f6; /* 배경색 */
`;

const MyPage = () => {
  const router = useRouter();
  const [myBooks, setMyBooks] = useState([]);
  const [myReservations, setMyReservations] = useState([]);
  const [studentId, setStudentId] = useState(""); // 학생 ID 상태 추가

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn !== "true") {
      router.push("/login");
    } else {
      const studentIdFromStorage = localStorage.getItem("studentId");
      setStudentId(studentIdFromStorage);
      fetchMyData(studentIdFromStorage); // 학생 ID를 통해 데이터 가져오기
    }
  }, []);

  const fetchMyData = async (studentId) => {
    try {
      const [booksResponse, reservationsResponse] = await Promise.all([
        fetch(
          `https://p530mrhup5.execute-api.ap-northeast-2.amazonaws.com/getBookLendingByStudentId?student_id=${studentId}`
        ),
        fetch(
          `https://p530mrhup5.execute-api.ap-northeast-2.amazonaws.com/getReservationInfoByStudentId?student_id=${studentId}`
        ),
      ]);

      if (!booksResponse.ok) throw new Error("Failed to fetch my books");
      if (!reservationsResponse.ok)
        throw new Error("Failed to fetch my reservations");

      const [booksData, reservationsData] = await Promise.all([
        booksResponse.json(),
        reservationsResponse.json(),
      ]);

      setMyBooks(booksData);
      setMyReservations(filterDuplicates(reservationsData));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterDuplicates = (reservations) => {
    const uniqueReservations = [];
    const seen = new Set();
    for (const reservation of reservations) {
      const key = reservation.facility_id + reservation.start_time;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueReservations.push(reservation);
      }
    }
    return uniqueReservations;
  };

  return (
    <div>
      <CoHeader />
      <PageContainer>
        <div className="container mx-auto px-4 flex-grow">
          <TitleComponent title="MY BOOKS" />
          <div className="flex flex-wrap justify-center gap-4">
            {myBooks.map((book, index) => (
              <MyBookContent
                key={index}
                img_url={book.img_url}
                title={book.title}
                returnDeadline={book.lending_date.split(" ")[0]}
                isOverdue={book.overdue_date > 0}
              />
            ))}
          </div>
          <TitleComponent title="MY RESERVATIONS" />
          <div className="flex flex-wrap justify-center gap-4">
            {myReservations.map((reservation, index) => (
              <MyFacilityContent
                key={index}
                img_url={reservation.img_url} // Placeholder image
                facilityName={reservation.facility_id} // Update as needed
                reservationDate={reservation.start_time.split(" ")[0]} // Placeholder, update as needed
                reservationTime={`${reservation.start_time.split(" ")[1]} - ${
                  reservation.end_time.split(" ")[1]
                }`} // Placeholder, update as needed
                isCompleted={reservation.status === "past"} // Determine based on your data
              />
            ))}
          </div>
        </div>
      </PageContainer>
      <CoFooter />
    </div>
  );
};

export default MyPage;
