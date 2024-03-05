import React from "react";
import styled from "styled-components";

// Styled components for the Books component
const CategoryContainer = styled.div`
  margin-bottom: 2rem; // Space between categories
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem; // Space between the title and the books
`;

const BooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; // Space between books
`;

const BookCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const BookImage = styled.img`
  width: 100%;
  max-width: 200px; // Adjust based on your preference
  height: auto;
  margin-bottom: 0.5rem;
`;

// Books component
const Books = ({ category, books }) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category}</CategoryTitle>
      <BooksContainer>
        {books.map((book, index) => (
          <BookCard key={index}>
            <BookImage src={book.img_url} alt="Book Cover" />
            <BookTitle>{book.title}</BookTitle>
            {/* Add more book details here */}
          </BookCard>
        ))}
      </BooksContainer>
    </CategoryContainer>
  );
};

export default Books;
