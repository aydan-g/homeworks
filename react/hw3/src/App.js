import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { ProductsContextProvider } from "./context/products";

import { Homepage, Cart, Favorites } from "./pages";

function App() {
  return (
    <Router>
      <ProductsContextProvider>
        <Switch>
          <Route path="/products" component={Homepage} />
          <Route path="/cart" component={Cart} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </ProductsContextProvider>
    </Router>
  );
}

export default App;