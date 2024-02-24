"use client";
import React from "react";
import CoHeader from "../../components/common/coheader/coheader";
import CoFooter from "../../components/common/cofooter/cofooter";
import TitleComponent from "../../components/common/title/title";
import Facility from "../../components/facility/facility_content/faciltiy";
const FacilityPage = () => {
  return (
    <div>
      <CoHeader />
      <div className="container mx-auto px-4 py-8">
        <TitleComponent
          title="FACILITY"
          className="text-orange-500 text-3xl font-bold text-center mb-8"
        />
        <div className="flex flex-wrap justify-center gap-4">
          <Facility
            title="CLASS 101"
            imageUrl="https://example.com/library.jpg"
            isAvailable={true}
          />
          <Facility
            title="CLASS 201"
            imageUrl="https://example.com/pool.jpg"
            isAvailable={false}
          />
          <Facility
            title="CLASS 301"
            imageUrl="https://example.com/gym.jpg"
            isAvailable={false}
          />
        </div>
      </div>
      <CoFooter />
    </div>
  );
};

export default FacilityPage;
