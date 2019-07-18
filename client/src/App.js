import React from "react";
import "./App.css";
import { Login } from "./screens/Login";

const url = "http://localhost:3000/devices";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Login url={url} />
      </div>
    );
  }
}

export default App;
