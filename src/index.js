import React, { Component } from 'react';
import ReactDOM from "react-dom";
// import { createBrowserHistory } from "history";
import { Provider } from 'react-redux';

import "assets/css/material-dashboard-react.css?v=1.9.0";
import TableList from "./views/TableList/TableList.js"
import store from './container/store/store'


// const hist = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <Provider store = {store}>
      <div>
      <TableList></TableList>
      </div>
      </Provider>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
