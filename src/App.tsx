import React from "react";
import { store } from "./store/Index";
import { Provider } from "react-redux";
import "./App.css";
import { UserLayout } from "./layout/user/UserLayout";

function App() {
  return (
    <Provider store={store}>
      <UserLayout />
    </Provider>
  );
}

export default App;
