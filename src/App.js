import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";
import Header from './components/Header';
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";


const App = () => {
  return (
    <Router>
      <Header />
      <Hero />
      <Routes>
        <Route path='/' element = {<About />}/>
      </Routes>
      <Footer />
    </Router>
   );
}

export default App;
