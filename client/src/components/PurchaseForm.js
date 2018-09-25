import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import { browserHistory } from "react-router";
class PurchaseForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      adress: "",
      cardHolder: "",
      cvc: 0,
      expMonth: 0,
      expYear: 0
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submit = () => {
    let newPayment = {
      name: this.state.name,
      email: this.state.email,
      adress: this.state.adress,
      cardHolder: this.state.cardHolder,
      cvc: this.state.cvc,
      expMonth: this.state.expMonth,
      expYear: this.state.expYear,
      paymentTotal: this.props.priceToPay
    };
    axios
      .post("/payment-successful", newPayment)
      .then(res => console.log(res.data)) //console.log(res.data)<Redirect to="/payment-success" />
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 offset-md-4 offset-sm-3">
            <h1>Payment Process</h1>
            <h4>Your total: {this.props.priceToPay} TND</h4>
            <form action="/payment-success" method="post" id="payment-form">
              <div className="col-xs-12">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    className="form-control"
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>
              <div className="col-xs-12">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    className="form-control"
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>
              <div className="col-xs-12">
                <div className="form-group">
                  <label htmlFor="adress">Adress</label>
                  <input
                    name="adress"
                    type="text"
                    id="adress"
                    className="form-control"
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>
              <div className="col-xs-12">
                <div className="form-group">
                  <label htmlFor="card-name">Card holder name</label>
                  <input
                    name="cardHolder"
                    type="text"
                    id="card-name"
                    className="form-control"
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>
              <div className="col-xs-12">
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="card-expiry-month">Expiration month</label>
                    <input
                      name="expMonth"
                      type="number"
                      id="card-expiry-month"
                      className="form-control"
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="card-expiry-year">Expiration year</label>
                    <input
                      name="expYear"
                      type="number"
                      id="card-expiry-year"
                      className="form-control"
                      onChange={this.onChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="form-group">
                  <label htmlFor="card-cvc">CVC</label>
                  <input
                    name="cvc"
                    type="number"
                    id="card-cvc"
                    className="form-control"
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>
              <Link to="/payment-success">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={this.submit}
                >
                  Buy now
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PurchaseForm;
