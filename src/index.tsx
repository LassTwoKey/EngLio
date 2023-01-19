import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import App from "./App";
import { store } from "./redux/store";
import favoritesApi from "./lib/favoritesApi";

import "normalize.css";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <ApiProvider api={favoritesApi}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApiProvider>
);
