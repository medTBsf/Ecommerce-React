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
      cardSerial: 0,
      cvc: 0,
      phone: 0
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
      cardSerial: this.state.cardSerial,
      cvc: this.state.cvc,
      phone: this.state.phone,
      paymentTotal: this.props.priceToPay
    };
    axios
      .post("/payment-successful", newPayment)
      .then(res => console.log(res.data)) //console.log(res.data)<Redirect to="/payment-success" />
      .catch(err => console.log(err));
  };

  fieldFilled = () => {
    return (
      this.state.name &&
      this.state.email &&
      this.state.adress &&
      this.state.cardSerial &&
      this.state.cvc &&
      this.state.phone
    );
  };

  render() {
    console.log(this.fieldFilled());
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 offset-md-4 offset-sm-3">
            <h1>Payment Process</h1>
            <h4>Your total: {this.props.priceToPay} TND</h4>
            <form
              action="/payment-success"
              method="post"
              id="payment-form"
              onSubmit={!this.fieldFilled() ? this.submit : () => {}}
            >
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
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="user-phone">Phone</label>
                    <input
                      name="phone"
                      type="number"
                      id="user-phone"
                      className="form-control"
                      onChange={this.onChange}
                      min="20000000"
                      max="99999999"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="form-group">
                  <label htmlFor="card-serie">Serial Number</label>
                  <input
                    name="cardSerial"
                    type="number"
                    id="card-serie"
                    className="form-control"
                    onChange={this.onChange}
                    min="1000000000000000"
                    max="9999999999999999"
                    required
                  />
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
              {this.fieldFilled() ? (
                <Link to="/payment-success">
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={this.submit}
                  >
                    Buy now
                  </button>
                </Link>
              ) : (
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={this.submit}
                >
                  Buy now
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PurchaseForm;
