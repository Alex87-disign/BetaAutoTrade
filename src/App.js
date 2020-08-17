import React from 'react';
import Openmenu from './Redux/Redux'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Header from './components/header/header';

function App(Openmenu) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header Openmenu={Openmenu} />
      </div>
    </BrowserRouter>
  );
}

export default App;
