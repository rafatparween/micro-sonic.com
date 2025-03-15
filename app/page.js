"use client"

import Footer from "./components/Footer";
import Customer from "./components/Customer";
import Technicians from "./components/Technicians";
import Assistance from "./components/Assistance";
import Avoid from "./components/Avoid";
import Helppage from "./components/Helppage";
import FooterSection from "./components/FooterSection";
import PrinterSetup from "./services/content/PrinterSetup";
import PrinterS from "./components/PrinterS";
import SupportPage from "./components/SupportPage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import JivoChat from "./Jivochat";
import SupportOptions from "./components/SupportOptions";
import Digonode from "./components/Digonode";
import Wrapper from "./components/Wrapper";




function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <PrinterSetup/>
      <SupportOptions/>
     
      {/* <HpSupportSection/> */}
      {/* <Solutions/> */}
      {/* <PrinterS/> */}
      <SupportPage/>
      <Digonode/>
      
      {/* <Technicians/> */}
      {/* <Assistance/> */}
     
      <Avoid/>
      <Wrapper/>
      <FooterSection/>
      <JivoChat/>


    </>

  )
}
export default Home;