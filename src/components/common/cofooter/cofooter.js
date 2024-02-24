"use client";
import Link from "next/link";
import styled from "styled-components";

// Footer 컨테이너 스타일
const FooterContainer = styled.footer`
  background-color: #f0202020; /* 배경색 */
  color: #1a202c; /* 텍스트 색상 */
  padding: 1.5rem; /* 내부 여백 */
  width: 100%; /* 전체 너비 */
  bottom: 0; /* 하단에 위치 */
  z-index: 100; /* 다른 요소 위에 배치 */
`;

// 링크 스타일
const FooterLink = styled.a`
  margin: 0.5rem; /* 외부 여백 */
  color: #cbd5e0; /* 텍스트 색상 */
  text-decoration: none; /* 텍스트에 밑줄 제거 */

  &:hover {
    color: #ffffff; /* 호버 시 텍스트 색상 변경 */
  }
`;

// Footer 컴포넌트 정의
const Footer = () => {
  return (
    <FooterContainer>
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center">
        <div className="flex justify-center w-full md:w-auto mb-4 md:mb-0">
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
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <p className="text-gray-500 text-sm text-center">
            © AWS Cloud School 4th Term 1. All rights reserved.
          </p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
