import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./reduxStore";
import App from "./App";

describe("app", () => {
  it("renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
