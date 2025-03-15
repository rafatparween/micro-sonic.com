"use client";
import Image from "next/image";
import Navbar from "./Components/Navbar";

import Header from "./Components/Header";
import DataContent from "./Components/DataContent";
import Footer from "./Components/Footer";
import Support from "./Components/Support";
import CinematicView from "./Components/CinematicView";
import dynamic from 'next/dynamic';
import 'tailwindcss/tailwind.css';
import ParticlesBackground from "./Components/ParticlesBackground";
import Slider from "./Components/PrinterSlider";
import Banner from "./Components/Banner";
import ContentSection from "./Components/ContentSection";



export default function Home() {
  return (
    <>
    <Navbar/>
      {/* <Header/> */}
      {/* <Support/>
      <DataContent/> */}

<div className="relative flex items-center justify-center h-screen bg-gradient-to-b from-blue-900 to-blue-700">
    <ParticlesBackground/> 
    
  </div>
  <Slider/>
  <Banner/>
  <ContentSection/>
     
    </>
  );
}
