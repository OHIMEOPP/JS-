import "./App.css";
import React, { Component, useRef, useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  const showeff = useEffect(() => {
    fetch("http://localhost:5000")
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);
  // const JSONmessage = JSON.stringify(message);

  return (
    <>
      <div>
        <p> message :{message}</p>
        <p>message.map :{/* {message.toString()} */}</p>
      </div>
    </>
  );
}

export default App;
