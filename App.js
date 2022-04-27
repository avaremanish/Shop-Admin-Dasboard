import Admindashboard from './Admindashboard';
import './App.css';
import Sliderbar from './Sliderbar';
import toolbar from './toolbar';
import BodySection from './BodySection';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Admindashboard/>
      </BrowserRouter>
   

     
    </div>
  );
}

export default App;
