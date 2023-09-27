import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { SideContainer } from './components/sideContainer/SideContainer';
import { MainContainer } from './components/mainContainer/MainContainer';



function App() {
  return (
    <div className="App">
      <Header />

      <div className='mainBit'>
          <SideContainer />
          <MainContainer />
      </div>
      
    </div>
  );
}

export default App;
