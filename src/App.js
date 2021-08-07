import React from "react";
import "./App.css";

import Homepage from "./homepage.component";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
