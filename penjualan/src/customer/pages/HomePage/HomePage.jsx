// import React from "react";
import MainCarousel from "../../components/HomeCaraosel/MainCaraosel";
import HomeSectionCarosel from "../../components/HomeSectionCaraosel/HomeSectionCaraosel";
import { bag } from "../../../data/bag";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosel data={bag} sectionName={"Bag/Carrier"}/>
        <HomeSectionCarosel data={bag} sectionName={"Bag/Carrier"}/>
        <HomeSectionCarosel data={bag} sectionName={"Bag/Carrier"}/>
        <HomeSectionCarosel data={bag} sectionName={"Bag/Carrier"}/>

      </div>
    </div>
  );
};
export default HomePage;
