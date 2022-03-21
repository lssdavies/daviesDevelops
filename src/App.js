import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";
import Header from './components/Header';
// import Hero from "./components/Hero";



const App = () => {
  return (
    <Router>
      <Header />
      {/* <Hero /> */}
      <Routes>
        <Route path='/' />
      </Routes>
    </Router>
   );
}

export default App;
