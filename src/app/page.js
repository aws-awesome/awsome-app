"use client";
import React, { useState, useEffect } from "react";
import CoHeader from "../components/common/coheader/coheader";
import CoFooter from "../components/common/cofooter/cofooter";
import TitleComponent from "@/components/common/title/title";
import BestBook from "@/components/home/bestBook/bestBook";

function Home() {
  const [bookdata, setBookdata] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://p530mrhup5.execute-api.ap-northeast-2.amazonaws.com/getSixBooks"
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setBookdata(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <CoHeader />
      <div className="container mx-auto px-8 py-16">
        {" "}
        {/* Increased padding */}
        <main className="flex-grow">
          <h1 className="text-3xl font-bold text-center my-6">
            AWSome University Library
          </h1>
          <TitleComponent title="Best Books" />
          <div className="flex flex-wrap justify-center gap-4 p-4">
            {bookdata.map((book, index) => (
              <BestBook
                key={index}
                imageUrl={book.img_url}
                title={book.title}
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
