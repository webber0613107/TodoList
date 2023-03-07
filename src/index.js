import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./store"


//import { Provider } from "react-redux";
//import store from "./store";


import App from "./components/App";
import Particle from "./components/Particles";

ReactDOM.render(
  <React.StrictMode>
    < Provider store={store}>
      <Particle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);