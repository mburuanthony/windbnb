import React, { useState, useEffect } from "react";
import "./assets/App.css";

import Search from "./Components/Search";
import Stays from "./Components/Stays";

function App() {
  const [stays, setStays] = useState([]);

  useEffect(() => {
    const Xhr = new XMLHttpRequest();
    Xhr.open("GET", "stays.json");
    Xhr.onload = function () {
      if (this.status === 200) {
        setStays(JSON.parse(this.response));
      }
    };
    Xhr.send();
  }, []);

  // const Country = stays.reduce(function (stay) {});
  const Country = "Finland";

  return (
    <div className="App">
      <Search />
      <div className="name">
        <p>Stays in {Country}</p>
        <p>{stays.length}+ stays</p>
      </div>
      <Stays stays={stays} />
    </div>
  );
}

export default App;
