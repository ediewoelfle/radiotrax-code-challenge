import React from "react";
import "./App.css";
import { Login } from "./screens/Login";
import { Devices } from "./screens/Devices";
import * as R from "ramda";
import axios from "axios";

const url = "http://localhost:3000/devices";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };

    this.sortBy = this.sortBy.bind(this);
    this.login = this.login.bind(this);
  }

  sortBy(key) {
    this.setState({ data: R.sortBy(R.prop(key), this.state.data) });
  }

  login(values) {
    const credentials = btoa(values.username + ":" + values.password);

    axios
      .get(url, {
        headers: {
          authorization: `Basic ${credentials}`
        }
      })
      .then(
        response => {
          this.setState({ data: response.data });
        },
        error => console.log("error", error)
      );
  }

  render() {
    return (
      <div className="App">
        <Login login={this.login} />
        <Devices devices={this.state.data} sortBy={this.sortBy} />
      </div>
    );
  }
}

export default App;
