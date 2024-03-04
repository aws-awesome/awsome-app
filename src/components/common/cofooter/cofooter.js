"use client";
import Link from "next/link";
import styled from "styled-components";

// Footer 컨테이너 스타일 업데이트
const FooterContainer = styled.footer`
  background-color: #343a40; /* 진한 회색 배경 */
  height: 200px;
  color: #ffffff; /* 텍스트 색상을 흰색으로 변경 */
  padding: 5rem 1.5rem; /* 내부 여백 조정 */
  width: 100%;
  bottom: 0;
  z-index: 100;
`;

// 링크 스타일 업데이트
const FooterLink = styled.a`
  margin: 0 15px; /* 링크 간격 조정 */
  color: #ffffff; /* 텍스트 색상을 흰색으로 변경 */
  text-decoration: none;

  &:hover {
    color: #cccccc; /* 호버 시 색상을 밝은 회색으로 변경 */
  }
`;

// 푸터 텍스트 스타일 업데이트
const FooterText = styled.p`
  color: #cccccc; /* 텍스트 색상을 밝은 회색으로 변경, 가독성을 위해 */
  text-align: center;
  margin-top: 20px; /* 상단 여백 */
  font-size: 0.875rem; /* 폰트 크기 */
`;

// Footer 컴포넌트 정의
const Footer = () => {
  return (
    <FooterContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Link href="/about-us" passHref>
          <FooterLink>About Us</FooterLink>
        </Link>
        <Link href="/faq" passHref>
          <FooterLink>FAQ</FooterLink>
        </Link>
        <Link href="/privacy-policy" passHref>
          <FooterLink>Privacy Policy</FooterLink>
        </Link>
        <Link href="/terms-conditions" passHref>
          <FooterLink>Terms and Conditions</FooterLink>
        </Link>
      </div>
      <FooterText>
        © AWS Cloud School 4th Term 1. All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
