import React from "react";
import styled, { css } from "styled-components";

const FacilityContainer = styled.div`
  width: 30%;
  height: 50%;
  border: 1px solid #e2e8f0; /* Tailwind's gray-200 */
  padding: 1rem; /* 16px */
  margin: 1rem; /* 16px */
  text-align: center;
  background-color: #ffffff; /* white */
  border-radius: 0.5rem; /* 8px */
  box-shadow: 0 10px 20px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05); /* Tailwind's shadow-lg */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px); /* Slightly raise the card */
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04); /* Increase shadow */
  }
`;

const FacilityTitle = styled.h2`
  font-size: 1.25rem; /* text-lg */
  font-weight: bold; /* font-bold */
  color: #2d3748; /* Tailwind's gray-800 */
  margin-bottom: 0.75rem; /* mb-3 */
`;

const FacilityImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 0.75rem; /* mb-3 */
  border-radius: 0.375rem; /* rounded-md */
`;

const FacilityStatus = styled.p`
  font-weight: bold; /* font-bold */
  font-size: 1rem; /* text-lg */
  padding: 0.25rem 0.5rem; /* py-1 px-2 */
  display: inline-block;
  border-radius: 9999px; /* rounded-full */
  color: #ffffff; /* white */
  background-color: ${({ isAvailable }) =>
    isAvailable
      ? "#38a169"
      : "#e53e3e"}; /* Tailwind's green-500 for available, red-500 for not */
`;

const Facility = ({ title, imageUrl, isAvailable }) => {
  return (
    <FacilityContainer>
      <FacilityTitle>{title}</FacilityTitle>
      <FacilityImage src={imageUrl} alt={title} />
      <FacilityStatus isAvailable={isAvailable}>
        {isAvailable ? "예약 가능" : "예약 불가능"}
      </FacilityStatus>
    </FacilityContainer>
  );
};

export default Facility;
