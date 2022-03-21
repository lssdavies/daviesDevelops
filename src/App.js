import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";
import Header from './components/Header';



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' />
      </Routes>
    </Router>
   );
}

export default App;
