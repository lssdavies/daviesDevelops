import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";
import Header from './components/Header';
import Hero from "./components/Hero";
import About from "./components/About";



const App = () => {
  return (
    <Router>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/daviesDevelops" element={<About />} />
      </Routes>
      
    </Router>
  );
}

export default App;
