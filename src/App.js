import React from "react";
import "./App.css";

import Homepage from "./pages/homepage/homepage.component.jsx";

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
