import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class PaymentSuccess extends Component {
  render() {
    return (
      <div className="container-fluid payment">
        <h1>Successful payment ...</h1>
        <Link to="/home">
          <button className="btn btn-outline-primary mt-2">
            Go back Shopping
          </button>
        </Link>
      </div>
    );
  }
}

export default PaymentSuccess;
