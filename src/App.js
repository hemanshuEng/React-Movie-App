import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Moviecards from "./components/Moviecards/Moviecards"

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Moviecards />
      </div>
    );
  }
}

export default App;
