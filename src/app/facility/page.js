"use client";
import React, { useState, useEffect } from "react";
import CoHeader from "../../components/common/coheader/coheader";
import CoFooter from "../../components/common/cofooter/cofooter";
import TitleComponent from "../../components/common/title/title";
import Facility from "../../components/facility/facility_content/faciltiy";

const FacilityPage = () => {
  const [facilities, setFacilities] = useState([]); // 시설 정보를 저장할 상태

  useEffect(() => {
    const fetchFacilities = async () => {
      // API 엔드포인트 변경
      const response = await fetch(
        "https://p530mrhup5.execute-api.ap-northeast-2.amazonaws.com/getCurrentReservationInfo"
      );
      const data = await response.json();
      setFacilities(data); // API 호출 결과로 상태 업데이트
    };

    fetchFacilities();
  }, []);

  return (
    <div>
      <CoHeader />
      <div className="container mx-auto px-4 py-8">
        <TitleComponent
          title="FACILITY"
          className="text-orange-500 text-3xl font-bold text-center mb-8"
        />
        <div className="flex flex-wrap justify-center gap-4">
          {facilities.map((facility, index) => (
            <Facility
              key={index}
              title={`CLASS ${facility.location}`} // 예시로 location을 CLASS 이름으로 사용
              imageUrl="https://example.com/library.jpg" // API에서 이미지 URL을 제공하지 않으므로 임시 URL 사용
              isAvailable={facility.true === "true"} // "true" 필드를 기반으로 예약 가능 여부 판단
              capacity={facility.capacity} // 수용 인원 정보 추가
            />
          ))}
        </div>
      </div>
      <CoFooter />
    </div>
  );
};

export default FacilityPage;
