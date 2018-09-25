import React, { Component } from "react";
import products from "./products/Products";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Api from "./Api";

class Test extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact render={() => <Link to="/home">Test</Link>} />
          <Route path="/home" render={() => <Api />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Test;
