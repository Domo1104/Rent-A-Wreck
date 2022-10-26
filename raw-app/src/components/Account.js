import React, { useState } from "react"

function Account({currentUser}) {
    return (
    <div className="user-info">
        <img className="avatar" src={currentUser.avatar}/>
        <div className="user-first-name">Name: {currentUser.first_name} {currentUser.last_name}</div> 
        <div className="email">Email: {currentUser.email}</div>
        <div className="birthdate"> Date of Birth: {currentUser.birthdate}</div>
        <div className="phone">Phone number: {currentUser.phone}</div>
        <div className="email-verified">{currentUser.email_verified}</div>
        <div className="password">Password: {currentUser.password}</div>
        <div className="subscribed">{currentUser.subscribed}</div>
        {/* <div className="address">Address: {currentUser.address}</div> */}

    </div>)
}
export default Account