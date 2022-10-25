import React, { useState, useEffect } from "react"

function App() {

    useEffect(() => {
        fetch("http://localhost:9292/rooms")
        .then(data => data.json())
        .then(rooms => {
          setRooms(rooms)
          // setCurrentRoom({...rooms[0]})
        })}
        return ()
}

export default APP