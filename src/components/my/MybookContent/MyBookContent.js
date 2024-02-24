import React from "react";
import styled from "styled-components";

const BookContent = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  transition: transform 0.3s ease, box-shadow 0.3s ease; // 부드러운 전환 효과 추가

  &:hover {
    transform: translateY(-2px); // 호버 시 카드를 위로 올림
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.1); // 호버 시 그림자 효과를 더 크게
  }
`;

const BookImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const BookInfo = styled.div`
  padding: 16px;
`;

const ReturnDeadline = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const OverdueStatus = styled.p`
  font-size: 14px;
  color: ${({ isOverdue }) => (isOverdue ? "#ef4444" : "#10b981")};
`;

const MyBookContent = ({ bookImageUrl, returnDeadline, isOverdue }) => {
  return (
    <BookContent>
      <BookImage src={bookImageUrl} alt="Book Cover" />
      <BookInfo>
        <ReturnDeadline>반납 기한: {returnDeadline}</ReturnDeadline>
        <OverdueStatus isOverdue={isOverdue}>
          {isOverdue ? "연체 중" : "연체 없음"}
        </OverdueStatus>
      </BookInfo>
    </BookContent>
  );
};

export default MyBookContent;
