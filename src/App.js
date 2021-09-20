import './App.css';
import First from './components/First.jsx';
import Navbar from './components/Navbar'
import React,{useState} from 'react'
;
import Home from './components/Home';

function App() {


    // state management an all wil g inside
    const [state,setState]=useState("Initial Value");

  



  // state and props
  return (
    <div className="App">
      <Navbar/>

      <Home/>
    </div>
  );
}

export default App;
