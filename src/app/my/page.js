"use client";
import React from "react";
import CoHeader from "../../components/common/coheader/coheader";
import CoFooter from "../../components/common/cofooter/cofooter";
import TitleComponent from "../../components/common/title/title";
import MyFacilityContent from "../../components/my/MyFacilityContent/MyFacilityContent";
import MyBookContent from "../../components/my/MyBookContent/MyBookContent";

const MyPage = () => {
  return (
    <div>
      <CoHeader />
      <div className="container mx-auto px-4 flex-grow">
        <div className="text-2xl font-bold text-orange-500 my-4">
          <TitleComponent title="MY BOOKS" />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <MyBookContent
            bookImageUrl="https://example.com/book-cover.jpg"
            returnDeadline="2024-02-28"
            isOverdue={false}
          />
          <MyBookContent
            bookImageUrl="https://example.com/book-cover.jpg"
            returnDeadline="2024-02-28"
            isOverdue={false}
          />
          <MyBookContent
            bookImageUrl="https://example.com/book-cover.jpg"
            returnDeadline="2024-02-28"
            isOverdue={false}
          />
          <MyBookContent
            bookImageUrl="https://example.com/book-cover.jpg"
            returnDeadline="2024-02-28"
            isOverdue={false}
          />

          {/* 추가 인스턴스 */}
        </div>

        <div className="text-2xl font-bold text-orange-500 my-4">
          <TitleComponent title="MY RESERVATIONS" />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <MyFacilityContent
            facilityImageUrl="https://example.com/facility-image.jpg"
            facilityName="Conference Room"
            reservationDate="2024-03-01"
            reservationTime="10:00 AM - 11:00 AM"
            isCompleted={false}
          />
          <MyFacilityContent
            facilityImageUrl="https://example.com/facility-image.jpg"
            facilityName="Conference Room"
            reservationDate="2024-03-01"
            reservationTime="10:00 AM - 11:00 AM"
            isCompleted={false}
          />

          <MyFacilityContent
            facilityImageUrl="https://example.com/facility-image.jpg"
            facilityName="Conference Room"
            reservationDate="2024-03-01"
            reservationTime="10:00 AM - 11:00 AM"
            isCompleted={false}
          />
          {/* 추가 인스턴스 */}
        </div>
      </div>
      <CoFooter />
    </div>
  );
};

export default MyPage;
