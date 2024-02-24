"use client";
import React from "react";
import styled from "styled-components";

// BookContainer 컴포넌트를 스타일링합니다.
const BookContainer = styled.div`
  width: 30%;
  border: 1px solid #e2e8f0; /* Tailwind의 gray-200 */
  padding: 1rem; /* 16px */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff; /* 배경색 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  border-radius: 8px; /* 모서리 둥글게 */

  transition: transform 0.3s ease, box-shadow 0.3s ease; /* 부드러운 전환 효과 */

  &:hover {
    transform: translateY(-2px); /* 호버 시 카드를 약간 위로 이동 */
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.1); /* 그림자 효과를 크게 */
  }
`;

// BookImage 컴포넌트를 스타일링합니다.
const BookImage = styled.img`
  width: 6rem; /* 24 */
  height: 6rem; /* 24 */
  margin-bottom: 1rem; /* 4 */
  object-fit: cover;
`;

// BookTitle 컴포넌트를 스타일링합니다.
const BookTitle = styled.h3`
  font-size: 1.125rem; /* text-lg */
  font-weight: 600; /* font-semibold */
  margin: 0; /* 가장자리 여백 제거 */
`;

// BookAuthor 컴포넌트를 스타일링합니다.
const BookAuthor = styled.p`
  color: #718096; /* Tailwind의 gray-600 */
  margin: 0; /* 가장자리 여백 제거 */
`;

// BestBook 컴포넌트를 정의합니다.
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
