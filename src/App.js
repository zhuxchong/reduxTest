import React, { Component, Fragment } from "react";
import ReduxTest from "./reduxText";
import { Provider } from "react-redux";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <ReduxTest />
        </Provider>
      </Fragment>
    );
  }
}

export default App;
