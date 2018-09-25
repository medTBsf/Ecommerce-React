import React, { Component } from "react";
import axios from "axios";

class Api extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    axios
      .get("/home")
      .then(res => {
        this.setState({
          products: res.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        {this.state.products.map((product, index) => {
          return (
            <div key={index}>
              <h1>{product.title}</h1>
              <p>{product.desc}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Api;
