"use strict";
import React from 'react';
import './App.css';
import Calculator from './layout/Calculator/Calculator';

function App() {
  return (
      <div className="App">
      <header className="App-header">
        c a l c u l a t o r
      </header>
      <div className="CalcApp">
        <Calculator />
      </div>
      </div>    
  );
}

export default App;
