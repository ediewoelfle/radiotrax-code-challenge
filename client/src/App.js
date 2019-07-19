import React from "react";
import "./App.css";
import { Login } from "./screens/Login";
import { Devices } from "./screens/Devices";
import axios from "axios";
import { login, newData, reset } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";

const url = "http://localhost:3000/devices";

const App = () => {
  const logged = useSelector(state => state.loggedReducer);
  const dispatch = useDispatch();

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
          dispatch(reset(response.data));
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
      <Devices />
    </div>
  );
};

export default App;
