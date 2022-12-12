import React from "react";
import { mainItemData } from "../utils/data";

import Footer from "./Footer";
import MainHeader from "./MainHeader";
import MainItemCard from "./MainItemCard";
import Products from "./Products";

const Main = ({ isDarkmode }) => {
  return (
    <div
      className={`w-full h-screen ${
        isDarkmode ? "bg-[#071739]" : "bg-[#F8F8F8]"
      } transition-all duration-200 ease-in-out sm:p-[20px] p-[10px] overflow-scroll scrollbar `}
    >
      <MainHeader isDarkmode={isDarkmode} />
      <div className="w-full grid md:grid-cols-2 grid-cols-1 my-[30px] gap-[20px]">
        {mainItemData.map((data, index) => (
          <MainItemCard key={index} data={data} />
        ))}
      </div>
      <Products isDarkmode={isDarkmode} />
      <Footer isDarkmode={isDarkmode} />

      <div className="text-center mt-[50px]">
        <h1
          className={`font-inter font-medium text-base ${
            isDarkmode ? "text-[#B4B4B4]" : "text-[#605F74]"
          }`}
        >
          © All Rights Reserved by ♥{" "}
          <a
            href="https://www.facebook.com/aung.myochit.98499"
            className="hover:text-[#2069FA] underline"
            target="_blink"
          >
            Denny Kate
          </a>
        </h1>
      </div>
      <div className="mb-[100px]"></div>
    </div>
  );
};

export default Main;
