import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, withStyles } from "@material-ui/core";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import CalculatorContainer from "./CalculatorContainer";
import calculatorReducer from "./calculatorReducer";

const store = createStore(calculatorReducer, composeWithDevTools());

const styles = {
  "@global": {
    "html, body, #root": {
      height: "100%"
    }
  }
};

function App() {
  return (
    <Provider store={store}>
      <CssBaseline>
        <CalculatorContainer />
      </CssBaseline>
    </Provider>
  );
}

const StyledApp = withStyles(styles)(App);
const rootElement = document.getElementById("root");
ReactDOM.render(<StyledApp />, rootElement);
