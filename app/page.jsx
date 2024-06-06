"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Sidebar from "@components/Sidebar";
import TestList from "@components/TestList";

const Home = () => {
  const [allSteps, setAllPosts] = useState([]);


  const fetchPost = async () => {
    const response = await fetch("/api/steps", { cache: "no-store" });
    const data = await response.json();
    setAllPosts(data);
  };

  
  useEffect(() => {
    fetchPost();
    // console.log(allSteps)
  }, []);


  return (
    <>
      
      {/* sidebar */}
      {/* <Sidebar /> */}
    
      {/* children */}
    
        <TestList allSteps={allSteps} />
    </>
  );
};

export default Home;
