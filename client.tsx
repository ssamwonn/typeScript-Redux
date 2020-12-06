import * as React from "react"; //DTS 제공 안함
import * as ReactDom from "react-dom"; //DTS 제공 안함
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
// import NumberBaseball from "./numberbaseball/NumberBaseball";

const Hot = hot(App); // HOC DTS 제공

ReactDom.render(
  <Provider store={store}>
    <Hot />
  </Provider>,

  document.querySelector("#root")
);
