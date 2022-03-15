import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Importing Components here
import LandingPage from './components/landing-page/LandingPage';
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
