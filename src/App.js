import React from 'react';
import './App.css';
import { store } from "./store/store.js";
import { Provider } from "react-redux";

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Main from '../src/screens/Main';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Main />
        </div>
        <Footer />
      </Provider>
    </React.Fragment>
  );
}

export default App;
