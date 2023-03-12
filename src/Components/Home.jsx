import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import request from "./request";
import data from "./data";
import Hero from "./Hero";
import {MdChevronLeft,MdChevronRight} from "react-icons/md"

const Home = () => {
  // let baseURL = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=e6798202934d43e4b7180fbcb4e65158`;
  let baseURL=request.headline;

  const [news, setnews] = useState(data.articles);

  useEffect(() => {
      axios.get(baseURL).then((response) => {
        setnews(response.data.articles);
      });
    });

   


  const left=(()=>{
    const slider=document.getElementById("slider");
    slider.scrollLeft=slider.scrollLeft-500
  })
  const right=(()=>{
    const slider=document.getElementById("slider");
    slider.scrollLeft=slider.scrollLeft+500
  })

  return (
    <>
      {/* <h1>Hello</h1> */}
      <div className="flex relative items-center group">
      <MdChevronLeft onClick={left}
          className="left-0 rounded-full bg-white absolute  opacity-50 hover:opacity-100 cursor-pointer z-[10] hidden group-hover:block"
          size={40}
        />
          
    <div id={"slider"} className=" w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide relative">
      {news.map((tempdata,id) => (
        <Hero key={id} tempdata={tempdata}/>
      ))}
      </div>
      <MdChevronRight onClick={right}
          className="right-0 rounded-full bg-white absolute opacity-50 hover:opacity-100 cursor-pointer z-[10] hidden group-hover:block "
          size={40}
        />

      </div>
      
    </>
  );
};

export default Home;
