import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "GlobalStyle";
import LetterContextProvider from "context/LetterContext";
import MemberContextProvider from "context/MemberContext";
import { Provider, provider } from "react-redux"
import store from "redux/config/configStore";
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
      <App />
      <GlobalStyle />
  </Provider>
);
