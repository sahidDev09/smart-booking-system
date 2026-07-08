import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingCategories from './components/BookingCategories';
import FeaturedServices from './components/FeaturedServices';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Background Decorative Elements */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      <div className="bg-shape shape-3"></div>

      {/* Components */}
      <Navbar />
      <Hero />
      <BookingCategories />
      <FeaturedServices />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
