import React from "react";
import About from "./components/about/About";
import Header from "./components/Header/Header";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";
import Nav from "./components/nav/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
