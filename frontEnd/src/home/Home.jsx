import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import PopolarDests from "../components/PopolarDests";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <PopolarDests />
        <Footer />
      </div>
    </>
  );
}

export default Home;
