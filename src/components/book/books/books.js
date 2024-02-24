import React from "react";
import styled from "styled-components";

// Styled components
const Container = styled.div``;

const CategoryTitle = styled.h2`
  font-size: 1.3rem; /* text-2xl */
  font-weight: 500; /* font-semibold */
  margin-bottom: 1rem; /* mb-4 */
`;

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* grid-cols-1 */
  gap: 1rem; /* gap-4 */
`;

const BookCard = styled.div`
  border: 1px solid #e2e8f0; /* border-gray-200 */
  border-radius: 0.5rem; /* rounded-lg */
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); /* shadow-lg */
  transition: box-shadow 0.3s ease-in-out; /* transition-shadow duration-300 ease-in-out */

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04); /* hover:shadow-xl */
  }
`;

const BookImage = styled.img`
  width: 100%;
  height: 12rem; /* h-48 */
  object-fit: cover; /* object-cover */
`;

const BookInfo = styled.div`
  padding: 1rem; /* p-4 */
`;

const BookTitle = styled.div`
  font-weight: 500; /* font-medium */
  font-size: 1.125rem; /* text-lg */
`;

// Books component
const Books = ({ category, books }) => {
  return (
    <Container>
      <CategoryTitle>{category}</CategoryTitle>
      <BooksGrid>
        {books.map((book, index) => (
          <BookCard key={index}>
            <BookImage src={book.imageUrl} alt={book.title} />
            <BookInfo>
              <BookTitle>{book.title}</BookTitle>
            </BookInfo>
          </BookCard>
        ))}
      </BooksGrid>
    </Container>
  );
};

export default Books;
