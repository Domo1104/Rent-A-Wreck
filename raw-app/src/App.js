import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react"

function App() {

  useEffect(() => {
    fetch("https://myfakeapi.com/api/cars/")
    .then(res => res.json())
    .then(data => {
  console.log(data);
    })
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
