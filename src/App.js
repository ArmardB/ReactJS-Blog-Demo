import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './Navbar';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Container />
      <hr />
      <Footer />
      </div>
    );
  }
}

export default App;
