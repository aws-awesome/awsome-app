import React from "react";
import CoHeader from "../components/common/coheader/coheader";
import CoFooter from "../components/common/cofooter/cofooter";
import TitleComponent from "@/components/common/title/title";
import BestBook from "@/components/home/bestBook/bestBook";

function Home() {
  const bookdata = [
    {
      id: 1,
      imageUrl: "https://example.com/book1.jpg",
      title: "책 제목 1",
      author: "작가1",
    },
    {
      id: 1,
      imageUrl: "https://example.com/book1.jpg",
      title: "책 제목 1",
      author: "작가1",
    },
    {
      id: 1,
      imageUrl: "https://example.com/book1.jpg",
      title: "책 제목 1",
      author: "작가1",
    },
    {
      id: 1,
      imageUrl: "https://example.com/book1.jpg",
      title: "책 제목 1",
      author: "작가1",
    },
    {
      id: 1,
      imageUrl: "https://example.com/book1.jpg",
      title: "책 제목 1",
      author: "작가1",
    },
    {
      id: 1,
      imageUrl: "https://example.com/book1.jpg",
      title: "책 제목 1",
      author: "작가1",
    },
    // 나머지 책 데이터...
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <CoHeader />
      <div className="container mx-auto px-4 py-8">
        <main className="flex-grow">
          <h1 className="text-3xl font-bold text-center my-6">
            AWSome University Library
          </h1>
          <TitleComponent title="Best Books" />
          {/* 가로 배치를 위한 flex 컨테이너 */}
          <div className="flex flex-wrap justify-center gap-4 p-4">
            {bookdata.map((book) => (
              <BestBook
                key={book.id}
                imageUrl={book.imageUrl}
                title={book.title}
                author={book.author}
              />
            ))}
          </div>
        </main>
      </div>
      <CoFooter />
    </div>
  );
}
export default Home;
