import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//global states
import { Provider } from "react-redux";
import { persistor, store } from "./states/store";
import { PersistGate } from "redux-persist/integration/react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faMinus,
  faMagnifyingGlass,
  faCircleUser,
  faBagShopping,
  faCaretDown,
  faCaretUp,
  faXmark,
  faTriangleExclamation,
  faCheckDouble,
  faStar,
  faCreditCard,
  faTruck,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

//styles

import "./index.css";
import ProductManager from "./components/ProductManager";

library.add(
  faPlus,
  faMinus,
  faMagnifyingGlass,
  faCircleUser,
  faBagShopping,
  faCaretDown,
  faCaretUp,
  faXmark,
  faTriangleExclamation,
  faCheckDouble,
  faStar,
  faCreditCard,
  faTruck,
  faTrashCan
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ProductManager />
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
