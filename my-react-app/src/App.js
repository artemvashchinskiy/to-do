import React from 'react';
import Header from './Header';
import Nav from './Nav';
import MainContent from './MainContent';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

