"use client"
import React, { useState } from 'react';
import style from './search.css'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log('검색어:', searchTerm);
    // 검색 로직 구현 (예: API 호출)
  };

  return (
    <div>
      <input
        type="text"
        placeholder="책 제목을 입력하세요"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
};

export default Search;
