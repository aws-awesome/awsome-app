import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './coheader.css'; // CSS 파일명 수정 필요

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 예시를 위해 로그인 상태를 관리하는 상태 변수를 추가

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn); // 로그인 상태 토글
  };

  return (
    <header className="co-header">
      <button onClick={() => {}}>☰</button> {/* 이 버튼 클릭은 사이드 네비게이션을 토글하도록 합니다. */}
      <h1>AWSome University</h1>
      <nav>
        <ul className="header-menu">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/book">BOOK</Link></li>
          <li><Link to="/facility">FACILITY</Link></li>
          <li><Link to="/my">MY</Link></li>
        </ul>
      </nav>
      <button onClick={toggleLogin}>{isLoggedIn ? '로그아웃' : '로그인'}</button>
    </header>
  );
};

export default Header;
