import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  margin-top: 3rem;
  margin: 2.7rem;
  text-align: left; /* Align the title to the right */
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #4a5568;
  margin: 0;
  padding: 0;
`;

const Divider = styled.hr`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  border: 0;
  color: red;
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
