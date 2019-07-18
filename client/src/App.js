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

    // holding for two arrays, one for display and one with the original data. Thinking of a better way to do this. --EdieDanger
    this.state = {
      data: null,
      devices: null
    };

    this.sortBy = this.sortBy.bind(this);
    this.login = this.login.bind(this);
  }

  // using ramda functions to sort the data by a key and save to the display array
  sortBy(key) {
    this.setState({
      ...this.state,
      devices: R.sortBy(R.prop(key), this.state.data)
    });
  }

  // basic login to retrieve data
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
          this.setState({
            ...this.state,
            data: response.data,
            devices: response.data
          });
        },
        error => console.log("error", error)
      );
  }

  render() {
    return (
      <div className="App">
        <Login login={this.login} />
        <Devices devices={this.state.devices} sortBy={this.sortBy} />
      </div>
    );
  }
}

export default App;
