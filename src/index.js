import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Home } from "./Js/pages/main-page";
import store from "./app/store";
import { Provider } from "react-redux";
import SingleProduct from "./Js/components/singleProduct";
ReactDOM.render(
  <>
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={SingleProduct} />
        </Switch>
      </Provider>
    </Router>
  </>,
  document.getElementById("root")
);
