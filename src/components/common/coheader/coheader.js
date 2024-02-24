"use client";
import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const HeaderContainer = styled.div`
  background-color: #f0202020; /* 흰색 배경 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem; /* 좌우 패딩 조정 및 상하 패딩 증가 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
  height: 16vh; /* 헤더 세로 길이 늘림 */
`;

const Logo = styled.div`
  color: orange; /*  글자 */
  font-size: 1.6rem; /* 로고 글자 크기 */
  font-weight: bold;
  margin: 0 3rem; /* 좌우 마진 추가 */
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const StyledLink = styled.span`
  color: orange; /*  글자 */
  cursor: pointer;
  margin-right: 20px; /* 링크 간의 간격 */
  font-size: 1rem; /* 링크 글자 크기 */
  font-weight: 500;

  transition: box-shadow 0.3s ease-in-out; /* transition-shadow duration-300 ease-in-out */

  &:hover {
    font-weight: 900; /* 글자 굵기 증가 */
  }
`;

const SideMenuIcon = styled.div`
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const SideMenu = styled.div`
  position: fixed;
  top: 80px; /* 헤더 아래부터 시작 */
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 250px;
  height: calc(100vh - 80px); /* 전체 높이에서 헤더 높이를 뺀 만큼 */
  background-color: #ffffff; /* 흰색 배경 */
  color: #6b4f8a; /* 보라색 글자 */
  transition: left 0.3s ease-in-out;
  padding: 2rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 20;
  display: flex; /* 세로 정렬을 위한 flex 컨테이너 설정 */
  flex-direction: column; /* 항목들을 세로로 정렬 */
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <SideMenuIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </SideMenuIcon>
        <Logo>AWSome University</Logo>
        <Nav>
          <Link href="/" passHref>
            <StyledLink>HOME</StyledLink>
          </Link>
          <Link href="/book" passHref>
            <StyledLink>BOOK</StyledLink>
          </Link>
          <Link href="/facility" passHref>
            <StyledLink>FACILITY</StyledLink>
          </Link>
          <Link href="/my" passHref>
            <StyledLink>MY</StyledLink>
          </Link>
          {/* 로그인 버튼 대신 NavLink 사용 */}
          <StyledLink onClick={() => alert("Login Clicked")}>Login</StyledLink>
        </Nav>
      </HeaderContainer>
      <SideMenu isOpen={isOpen}>
        {/* 사이드 메뉴 내 네비게이션 항목을 세로로 정렬하여 추가 */}
        <Link href="/" passHref>
          <StyledLink onClick={() => setIsOpen(false)}>HOME</StyledLink>
        </Link>
        <Link href="/book" passHref>
          <StyledLink onClick={() => setIsOpen(false)}>BOOK</StyledLink>
        </Link>
        <Link href="/facility" passHref>
          <StyledLink onClick={() => setIsOpen(false)}>FACILITY</StyledLink>
        </Link>
        <Link href="/my" passHref>
          <StyledLink onClick={() => setIsOpen(false)}>MY</StyledLink>
        </Link>
      </SideMenu>
    </>
  );
}
