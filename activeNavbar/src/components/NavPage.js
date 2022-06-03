import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import News from '../pages/News'
import About from '../pages/About'

const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;
