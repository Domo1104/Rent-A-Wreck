import Account from './components/Account';
import Home from './components/Home';
import { BrowserRouter,
  Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useEffect, useState } from "react"
import NavBar from './components/NavBar';

function App() {
  const [currentUser, setCurrentUser] = useState([])
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    fetch("https://myfakeapi.com/api/cars/")
    .then(res => res.json())
    .then(data => {
  console.log(data);
    })

    fetch("https://myfakeapi.com/api/users/")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setCurrentUser(data.Users[0])
    })
  }, [])

  function handleSearchChange(event) {
    setSearchValue(event.target.value)
  }

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar currentUser={currentUser} handleSearchChange={handleSearchChange} searchValue={searchValue} />
        <Routes>
          <Route exact path='/' element={<Home currentUser={currentUser}/>}/>
          <Route exact path="/account" element={<Account currentUser={currentUser}/>}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
