import React from 'react';
import styles from './title.css';

// 타이틀 컴포넌트 정의
const TitleComponent = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1> {/* 제목 데이터 표시 */}
      <hr /> {/* 밑줄 추가 */}
    </div>
  );
};

export default TitleComponent;
