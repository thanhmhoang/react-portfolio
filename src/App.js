import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Contact />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;