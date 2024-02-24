// LoginPage.js
"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import CoHeader from "../../components/common/coheader/coheader";
import CoFooter from "../../components/common/cofooter/cofooter";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3f4f6; /* 배경색 */
`;

const LoginForm = styled.form`
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem; /* 입력 필드 간격 */
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #cbd5e1;
`;

const Button = styled.button`
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  background-color: #6b4f8a;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #5a3d74;
  }
`;

const Title = styled.h2`
  color: #6b4f8a;
`;

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 로직 구현 부분
    alert(`Login attempt with Username: ${username} Password: ${password}`);
  };

  return (
    <div>
      <CoHeader />
      <PageContainer>
        <LoginForm onSubmit={handleSubmit}>
          <Title>Login</Title>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Log In</Button>
          <p>
            Don't have an account? <Link href="/signup">Sign Up</Link>
          </p>
        </LoginForm>
      </PageContainer>
      <CoFooter />
    </div>
  );
}
