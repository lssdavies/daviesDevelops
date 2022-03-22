import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";
import Header from './components/Header';
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";



const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Hero />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/daviesDevelops" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
