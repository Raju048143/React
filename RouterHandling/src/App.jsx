import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Course_Details from "./pages/Course_Details";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/courses" element={<Product />} />
          <Route path="/about" element={<About />} />
           <Route path="/courses/:id" element={<Course_Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
