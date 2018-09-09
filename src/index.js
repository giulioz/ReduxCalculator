import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@material-ui/core";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import Calculator from "./Calculator";
import "./index.css";

const reducer = (state = 0, action) => {
  switch (action.operator) {
    case "+":
      return state + action.value;
    case "-":
      return state - action.value;
    case "*":
      return state * action.value;
    case "/":
      return state / action.value;
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  doOperation: (operator, value) => dispatch({ type: operator, value })
});

const CalculatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);

function App() {
  return (
    <Provider store={store}>
      <CssBaseline>
        <CalculatorContainer />
      </CssBaseline>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
