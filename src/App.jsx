import React from "react";
import AppBody from "./components/AppBody";
import { Provider } from "react-redux";
import store from "../store";

function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <AppBody />
        </Provider>
      </div>
    </>
  );
}

export default App;
