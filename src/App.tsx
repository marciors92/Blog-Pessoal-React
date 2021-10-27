import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';


function App() {
  return (
    <h1>
      <Navbar />
      <Home />
      <Footer />
    </h1>
  );
}

export default App;
