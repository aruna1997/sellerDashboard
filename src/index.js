import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter,Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import  reducer  from "./reducer";
const store=createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
   <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
    </Provider>,document.getElementById("root")
)