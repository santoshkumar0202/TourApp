import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Destinations from "./components/Destinations";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Packages" element={<Destinations/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
    </>
  );
}
export default App;
