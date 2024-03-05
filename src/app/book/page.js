"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CoHeader from "../../components/common/coheader/coheader";
import CoFooter from "../../components/common/cofooter/cofooter";
import TitleComponent from "@/components/common/title/title";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  margin: 5%;
  border: 1px solid gray;
  background-color: white;
  border-radius: 25px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 40%;
  padding: 10px;
  font-size: 16px;
  border-radius: 20px;
  border: 1px solid #ccc;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  margin-left: 10px;
  background-color: rgb(135, 185, 255);
  color: white;
  cursor: pointer;
`;

const BooksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const BookCard = styled.div`
  width: 300px;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 3%;
  margin: 5px 5px 50px 5px;

  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.1);
  }
`;

const BookImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  border-radius: 8px;
`;

const BookTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

const BookAvailability = styled.p`
  font-size: 18px;
  text-align: center;
  color: white;
  font-weight: bold;
  padding: 2%;
  background-color: ${({ available }) => (available ? "#007b10" : "#ff3333")};
  border-radius: 5px;
`;

const NoResultsMessage = styled.p`
  font-size: 18px;
  text-align: center;
`;

const BookPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const handleSearch = async () => {
    if (searchTerm.trim()) {
      try {
        const response = await fetch(
          `https://p530mrhup5.execute-api.ap-northeast-2.amazonaws.com/getBookByTitle?title=${encodeURIComponent(
            searchTerm.trim()
          )}`
        );
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <PageContainer>
      <CoHeader />
      <ContentContainer>
        <TitleComponent title="SEARCH " />
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search by book title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchButton onClick={handleSearch}>Search</SearchButton>
        </SearchContainer>
        {searchResults.length > 0 ? (
          <BooksContainer>
            {searchResults.map((book) => (
              <BookCard key={book.book_id}>
                <BookTitle>{book.title}</BookTitle>
                <BookImage src={book.img_url} alt={book.title} />
                <BookAvailability available={!book.is_loaned}>
                  {book.is_loaned
                    ? "Not Available for Loan"
                    : "Available for Loan"}
                </BookAvailability>
              </BookCard>
            ))}
          </BooksContainer>
        ) : (
          <NoResultsMessage>No results found.</NoResultsMessage>
        )}
      </ContentContainer>
      <CoFooter />
    </PageContainer>
  );
};

export default BookPage;
