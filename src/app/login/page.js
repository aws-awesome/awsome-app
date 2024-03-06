"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import CoHeader from "../../components/common/coheader/coheader";
import CoFooter from "../../components/common/cofooter/cofooter";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
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
  const router = useRouter();
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState(""); // 비밀번호 상태 추가

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://p530mrhup5.execute-api.ap-northeast-2.amazonaws.com/getStudentByStudentId?student_id=${studentId}`
      );
      const data = await response.json();
      if (data.length > 0) {
        // 학생 이름과 student_id를 로컬 스토리지에 저장
        localStorage.setItem("userName", data[0].student_name);
        localStorage.setItem("studentId", studentId); // student_id 저장
        localStorage.setItem("isLoggedIn", "true"); // 로그인 상태 저장
        router.push("/"); // 홈 페이지로 리다이렉트
      } else {
        alert("Login Failed: No matching student ID found");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login Failed: Error occurred");
    }
  };

  return (
    <div>
      <CoHeader />
      <PageContainer>
        <LoginForm onSubmit={handleSubmit}>
          <Title>Login</Title>
          <Input
            type="text"
            placeholder="Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password} // 비밀번호 입력 상태를 반영
            onChange={(e) => setPassword(e.target.value)} // 비밀번호 상태 업데이트
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
