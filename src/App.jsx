import React from "react";
import { Provider } from 'react-redux';
import store from './redux/store';
import Giphy from "./components/Giphy";

import "./App.css";
import UserData from "./components/userData";
const App = () => {
  return (
    <Provider store={store}>
    <div>
      <Giphy />
      <UserData/>
    </div>
    </Provider>
  );
};

export default App;
