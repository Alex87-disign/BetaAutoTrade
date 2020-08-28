import React from 'react';
import Openmenu from './Redux/Redux'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/header/header';
import CallBackButton from './components/CallBackButton/CallBackButton';
import OrderButton from './components/OrderButton/OrderButton';
import Main from './components/main/main';

function App(Openmenu) {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <OrderButton />
        <CallBackButton /> */}
        <Header Openmenu={Openmenu} />
      </div>
      <Main/>
    </BrowserRouter>
  );
}

export default App;
