// BookPage.js
"use client";
import React, { useState } from "react";
import CoHeader from "../../components/common/coheader/coheader";
import CoFooter from "../../components/common/cofooter/cofooter";
import TitleComponent from "@/components/common/title/title";
import Search from "../../components/book/search/search";
import Books from "../../components/book/books/books";
import styled from "styled-components"; // styled-components import

const BookPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
`;

const BookPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const books = [
    {
      imageUrl: "https://example.com/book1.jpg",
      title: "Book 1",
      author: "Author A",
    },
    {
      imageUrl: "https://example.com/book2.jpg",
      title: "Book 2",
      author: "Author B",
    },
    {
      imageUrl: "https://example.com/book3.jpg",
      title: "Book 3",
      author: "Author C",
    },
    {
      imageUrl: "https://example.com/book4.jpg",
      title: "Book 4",
      author: "Author D",
    },
  ];

  const handleSearch = (term) => {
    console.log("검색어:", term);
    // 검색 로직 구현 (예: API 호출, books 필터링 등)
  };

  return (
    <BookPageContainer>
      <CoHeader />
      <ContentContainer className="container mx-auto px-4 py-8">
        <TitleComponent title="Library" />

        <div className="mt-8">
          <Search onSearch={handleSearch} />
          <div className="grid grid-cols-4 gap-4 mt-4">
            {books.map((book, index) => (
              <Books
                key={index}
                category={`Category ${index + 1}`}
                books={[book]}
              />
            ))}
          </div>
        </div>
      </ContentContainer>
      <CoFooter />
    </BookPageContainer>
  );
};

export default BookPage;
