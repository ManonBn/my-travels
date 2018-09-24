import React, { Component } from "react";
import photo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={photo} className="App-photo" alt="photo" />
          <h1 className="App-title">my-travels</h1>
        </header>
        <Travel
          destination="To the moon"
          distance="100.000.000 km"
          photo="http://www.dreamteamdirectors.com/Screen%20Shot%202017-09-27%20at%208.17.44%20AM.png"
          country="In the Univers"
        />
        <Travel
          destination="To the stars"
          distance="31 557 600 secondes SI"
          photo="http://type-a-lifestyle.com/wp-content/uploads/2017/04/iStock-513298210.jpg"
          country="In the Sky"
        />
      </div>
    );
  }
}

export default App;