import React, { useState } from "react"
import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar({currentUser, searchValue, handleSearchChange}) {
  return (
  <div className="navbar">
    <div className="logo"> R-A-W </div>
    <div className="nav-links">
        <NavLink className="link" to="/home">Home</NavLink> |  
        <NavLink className="link" to="/cars">Cars</NavLink> |  
        <NavLink className="link" to="/owners">Owners</NavLink>
    </div>
    <div className="search">
        <input type="text" placeholder="Location..." value={searchValue} onChange={handleSearchChange}/>
        <button>Search</button>
    </div>
    <div className="account-link">
        <NavLink className="link" to="/account">Account</NavLink> 
        {currentUser ?  <button>Logout</button> : <button>Login</button>}
    </div>
 
</div>
)}

export default NavBar