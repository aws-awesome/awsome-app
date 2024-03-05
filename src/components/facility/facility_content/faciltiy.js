"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { usePathname, useRouter } from "next/navigation";

const FacilitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const FacilityContainer = styled.div`
  width: 25%;
  min-width: 250px;
  border: 1px solid #e2e8f0;
  padding: 20px;
  margin: 10px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const FacilityImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 15px;
`;

const FacilityTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 10px;
`;

const FacilityInfo = styled.p`
  margin: 5px 0;
  font-size: 1rem;
`;

const FacilityStatus = styled(FacilityInfo)`
  color: #ffffff;
  background-color: ${({ isAvailable }) =>
    isAvailable ? "#38a169" : "#e53e3e"};
  padding: 5px;
  border-radius: 20px;
  display: inline-block;
`;

const FacilitiesPage = () => {
  const [facilities, setFacilities] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchFacilities = async () => {
      const response = await fetch(
        "https://p530mrhup5.execute-api.ap-northeast-2.amazonaws.com/getCurrentReservationInfo"
      );
      const data = await response.json();
      // Assuming the API response directly maps to the state
      setFacilities(data);
    };

    fetchFacilities();
  }, []);

  // Function to handle click on a facility
  const handleClick = (facilityId) => {
    router.push(`facility/${encodeURIComponent(facilityId)}`);
  };

  return (
    <FacilitiesContainer>
      {facilities.map((facility, index) => (
        <FacilityContainer
          key={index}
          onClick={() => handleClick(facility.facility_id)}
        >
          <FacilityImage
            src={facility.img_url || "placeholder-image-url.jpg"}
            alt={facility.facility_id}
          />
          <FacilityTitle>{facility.facility_id}</FacilityTitle>
          <FacilityInfo>Capacity: {facility.capacity}</FacilityInfo>
          <FacilityStatus isAvailable={facility.true === "true"}>
            {facility.true === "true" ? "Available" : "Unavailable"}
          </FacilityStatus>
        </FacilityContainer>
      ))}
    </FacilitiesContainer>
  );
};

export default FacilitiesPage;
