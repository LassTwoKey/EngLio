import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "normalize.css";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
