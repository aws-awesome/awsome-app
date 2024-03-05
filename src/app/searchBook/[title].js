"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { GetServerSideProps } from "next";
import CoHeader from "../../components/common/coheader/coheader";
import CoFooter from "../../components/common/cofooter/cofooter";
import TitleComponent from "@/components/common/title/title";
import Books from "../../components/book/books/books";
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
`;

const SearchBook = () => {
  const [books, setBooks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Ensure we access `title` only when the router is ready
    if (router.isReady) {
      const { title } = router.query; // Access title here within useEffect

      console.log("Title is:", title); // This should now log the expected title

      if (title) {
        const fetchBooksByTitle = async () => {
          try {
            const response = await fetch(
              `https://p530mrhup5.execute-api.ap-northeast-2.amazonaws.com/getBookByTitle?title=${encodeURIComponent(
                title
              )}`
            );
            if (!response.ok) throw new Error("Failed to fetch books");
            const data = await response.json();
            setBooks(data);
          } catch (error) {
            console.error("Error fetching books:", error);
          }
        };
        fetchBooksByTitle();
      }
    }
  }, [router.isReady, router.query]); // Add router.query to dependency array to re-run useEffect if query changes

  return (
    <div>
      <CoHeader />
      <div>
        <TitleComponent title={`Search results for: ${title}`} />
        {books.map((book, index) => (
          <Books key={index} category="" books={[book]} />
        ))}
      </div>
      <CoFooter />
    </div>
  );
};

export default SearchBook;
