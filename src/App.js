import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./store/store.js";
import { Provider } from "react-redux";

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div>
        container
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
