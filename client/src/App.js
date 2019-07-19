import React from "react";
import "./App.css";
import { Login } from "./screens/Login";
import { Devices } from "./screens/Devices";
import * as R from "ramda";
import axios from "axios";
import { login, newData } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";

const url = "http://localhost:3000/devices";

const App = () => {
  const logged = useSelector(state => state.loggedReducer);
  console.log("logged", logged);
  const data = useSelector(state => state.dataReducer);
  const dispatch = useDispatch();

  let state = {
    data: null,
    devices: null
  };

  const reset = () => {
    state = { ...state, devices: state.data };
  };

  // using ramda functions to sort the data by a key and save to the display array
  const sortBy = key => {
    state = {
      ...state,
      devices: R.sortBy(R.prop(key), this.state.devices)
    };
  };

  // use this for the filter
  const filterBy = (key, value) => {
    state = {
      ...state,
      devices: R.filter(device => {
        return device[key] === value;
      }, this.state.data)
    };
  };

  // basic login to retrieve data
  const signin = values => {
    const credentials = btoa(`${values.username}:${values.password}`);

    axios
      .get(url, {
        headers: {
          authorization: `Basic ${credentials}`
        }
      })
      .then(
        response => {
          dispatch(newData(response.data));
          dispatch(login());
        },
        error => {
          alert(error);
        }
      );
  };

  return (
    <div className="App">
      {!logged && <Login login={signin} />}
      <Devices
        devices={data}
        sortBy={sortBy}
        filterBy={filterBy}
        reset={reset}
      />
    </div>
  );
};

export default App;
