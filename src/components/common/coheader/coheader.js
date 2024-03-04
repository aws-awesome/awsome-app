"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logoImage from "../../../image/logo.png";

const HeaderContainer = styled.div`
  height: 330px;
  background-color: #ffffff;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px 2rem 0;
  box-shadow: 0 4px 15px -1px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const StyledLink = styled.a`
  color: black;
  cursor: pointer;
  margin-right: 20px;
  font-size: 1.1rem;
  font-weight: 500;
  &:hover {
    font-weight: 900;
  }
`;

const SideMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 750px) {
    display: block;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const SideMenu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 200px;
  height: 100vh;
  background-color: #ffffff;
  color: #6b4f8a;
  transition: left 0.3s ease-in-out;
  padding: 2rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 20;
  display: flex;
  flex-direction: column;
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedUserName = localStorage.getItem("userName");
    setIsLoggedIn(storedIsLoggedIn);
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setUserName("");
    window.location.href = "/"; // 페이지를 홈으로 리다이렉트, 또는 router.push("/") 사용
  };
  return (
    <>
      <HeaderContainer>
        <Nav>
          <SideMenuIcon onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </SideMenuIcon>
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
        </Nav>
        <LogoContainer>
          <Image src={logoImage} alt="Logo" width={300} height={100} />
        </LogoContainer>

        <Nav>
          {(() => {
            console.log("isLoggedIn before rendering Nav:", isLoggedIn);
            const content = isLoggedIn ? (
              <>
                <StyledLink as="div">{userName}</StyledLink>
                <StyledLink onClick={handleLogout}>Logout</StyledLink>
              </>
            ) : (
              <Link href="/login" passHref>
                <StyledLink>Login</StyledLink>
              </Link>
            );
            console.log("isLoggedIn after determining content:", isLoggedIn);
            return content;
          })()}
        </Nav>
      </HeaderContainer>
      <SideMenu isOpen={isOpen}>
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
