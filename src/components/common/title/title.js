"use client";
import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  color: #4a5568;
  margin: 0;
  padding: 0;
`;

const Divider = styled.hr`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  border: 0;
  height: 1px;
  background-color: gray;
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
