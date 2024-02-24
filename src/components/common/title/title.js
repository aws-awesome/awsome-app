"use client";
import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.25rem; /* Tailwind의 text-4xl에 해당 */
  font-weight: bold;
  color: #4a5568; /* Tailwind의 text-gray-800에 해당 */
  margin: 0;
  padding: 0;
`;

const Divider = styled.hr`
  margin-top: 0.5rem; /* Tailwind의 mt-2에 해당 */
  margin-bottom: 1.5rem; /* Tailwind의 mb-6에 해당 */
  border: 0;
  height: 1px;
  background-color: #e2e8f0; /* 가정한 색상, Tailwind의 gray-200에 가까움 */
`;

const TitleComponent = ({ title }) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <Divider />
    </TitleContainer>
  );
};

export default TitleComponent;
