import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { FlashSale } from './components/FlashSale';
import { BestSellers } from './components/BestSellers';
import { EnhanceMusic } from './components/EnhanceMusic';
import { OurProducts } from './components/OurProducts';
import { NewArrival } from './components/NewArrival';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { SignUp } from './components/SignUp';
import Home from './view/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            {/* Добавьте другие маршруты здесь */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;