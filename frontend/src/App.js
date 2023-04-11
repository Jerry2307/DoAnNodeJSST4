import './App.css';
import Header from './giaodien/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import WebFont from "webfontloader";
import React, { useEffect } from "react";

function App() {
  useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"]
      }
    })
  },[])

  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
