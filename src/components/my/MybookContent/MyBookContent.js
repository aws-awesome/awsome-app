import React from "react";
import styled, { css } from "styled-components";

const BookContent = styled.div`
  margin: 1%;
  width: 23%; /* 조정된 크기 */
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.1);
  }
`;

const ImgUrl = styled.img`
  width: 80%;
  margin: 3% auto; /* 이미지를 수평으로 가운데 정렬 */

  height: auto;
  object-fit: cover;
  border-radius: 10px; /* 이미지에도 둥근 모서리 적용 */
`;

const BookInfo = styled.div`
  padding: 16px;
`;

const BookTitle = styled.h3`
  font-size: 16px; /* 조정된 글씨 크기 */
  font-weight: bold;
  margin-bottom: 8px;
  color: #333; /* 글씨색 변경 */
`;

const ReturnDeadline = styled.p`
  font-size: 14px; /* 조정된 글씨 크기 */
  font-weight: 600;
`;

const OverdueStatus = styled.p`
  font-size: 15px; /* 조정된 글씨 크기 */
  font-weight: bold;
  color: ${({ isOverdue }) => (isOverdue ? "#ef4444" : "#10b981")};
`;

const MyBookContent = ({ img_url, returnDeadline, isOverdue, title }) => {
  return (
    <BookContent>
      <ImgUrl src={img_url} alt="Book Cover" />
      <BookInfo>
        <BookTitle>{title}</BookTitle>
        <ReturnDeadline>반납 기한: ~ {returnDeadline}</ReturnDeadline>
        <OverdueStatus isOverdue={isOverdue}>
          {isOverdue ? "연체 중" : "대출 중"}
        </OverdueStatus>
      </BookInfo>
    </BookContent>
  );
};

export default MyBookContent;
