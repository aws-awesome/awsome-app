import React from "react";
import styled from "styled-components";

const BookContainer = styled.div`
  width: 25%;
  height: auto;
  border: 1px solid #e2e8f0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 20px;

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.1);
  }

  @media only screen and (max-width: 768px) {
    width: 40%;
  }

  @media only screen and (max-width: 480px) {
    width: 80%;
    padding: 1rem;
    margin: 10px;
  }
`;

const BookImage = styled.img`
  width: 10rem;
  margin-bottom: 1rem;
  object-fit: cover;
`;

const BookTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
`;

const BookAuthor = styled.p`
  color: #718096;
  margin: 0;
`;

const BestBook = ({ imageUrl, title, author }) => {
  return (
    <BookContainer>
      <BookImage src={imageUrl} alt={title} />
      <BookTitle>{title}</BookTitle>
      <BookAuthor>{author}</BookAuthor>
    </BookContainer>
  );
};

export default BestBook;
