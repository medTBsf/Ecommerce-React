import React, { Component } from "react";
import CheckoutCart from "./CheckoutCart";
import "../styles/CheckoutCartList.css";
import { Link } from "react-router-dom";

class CheckoutCartList extends Component {
  render() {
    return (
      <div className="container">
        {this.props.checkoutCarts.length === 0 ? (
          <div className="row empty-zone">
            <p className="image-empty-cart">
              <img
                alt="emty-cart"
                src="https://www.jumia.com.tn/images/oshun/cart/empty-cart.png"
              />
            </p>
            <h2>Your shopping cart is empty!</h2>
          </div>
        ) : (
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col-md-12">
                  <h1>Total : ${this.props.totalPrice}</h1>
                </div>
              </div>
              <div className="row">
                {this.props.checkoutCarts.map((product, index) => {
                  return (
                    <CheckoutCart
                      product={product}
                      key={index}
                      removeFromCart={(p, totalPerProduct) =>
                        this.props.removeFromCart(p, totalPerProduct)
                      }
                      getTotalPriceAfterIncrement={product =>
                        this.props.getTotalPriceAfterIncrement(product)
                      }
                      getTotalPriceAfterDecrement={product =>
                        this.props.getTotalPriceAfterDecrement(product)
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-md-12 mt-4">
            <div className="row">
              <div
                className={
                  this.props.checkoutCarts.length !== 0
                    ? "col-md-3 offset-md-3 continue-button"
                    : "col-md-6 offset-md-3 continue-button"
                }
              >
                <Link to="/home">
                  <button className="btn btn-success">Continue Shopping</button>
                </Link>
              </div>
              {this.props.checkoutCarts.length !== 0 ? (
                <div className="col-md-3 reset-button">
                  <button
                    className="btn btn-danger"
                    onClick={() => this.props.resetShoppingCart()}
                  >
                    Reset Shopping Cart
                  </button>
                </div>
              ) : (
                <div />
              )}
            </div>
            <div className="row">
              {this.props.checkoutCarts.length !== 0 ? (
                <div className="col-md-6 offset-md-3 bouton-buy">
                  <Link
                    to={`/payment-process/${this.props.totalPrice}`}
                    className="link-buy"
                  >
                    Buy now
                  </Link>
                </div>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutCartList;
