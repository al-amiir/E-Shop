import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Home } from "./Js/pages/home";
import store from "./app/store";
import { Provider } from "react-redux";
import SingleProduct from "./Js/components/singleProduct";
import ProductsLine from "./Js/subComponent/productsLine";
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
