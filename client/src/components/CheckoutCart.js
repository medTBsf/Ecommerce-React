import React, { Component } from "react";
import "../styles/CheckoutCart.css";

class CheckoutCart extends Component {
  constructor() {
    super();
    this.state = {
      qtyPerProduct: 1,
      totalPricePerProduct: 0
    };
  }

  needMoreQty = () => {
    this.setState(
      {
        qtyPerProduct: this.state.qtyPerProduct + 1
      },
      () => {
        this.props.getTotalPriceAfterIncrement(this.props.product);
        this.setState({
          totalPricePerProduct:
            this.state.qtyPerProduct * this.props.product.price
        });
      }
    );
  };

  needLessQty = () => {
    this.setState(
      {
        qtyPerProduct: Math.max(1, this.state.qtyPerProduct - 1)
      },
      () => {
        this.props.getTotalPriceAfterDecrement(this.props.product);
        this.setState({
          totalPricePerProduct: Math.max(
            this.props.product.price,
            this.state.qtyPerProduct * this.props.product.price
          )
        });
      }
    );
  };

  render() {
    return (
      <div className="col-md-12 cart-zone">
        <div className="check-cart">
          <div className="img-zone">
            <img
              alt=""
              src={this.props.product.image}
              className="image-checkout"
            />
          </div>
          <div className="title-zone">{this.props.product.title}</div>
          <div className="price-zone">${this.props.product.price}</div>
          <div className="qty-zone">
            <button className="btn btn-primary" onClick={this.needMoreQty}>
              +
            </button>
            <span> {this.state.qtyPerProduct} </span>
            <button className="btn btn-primary" onClick={this.needLessQty}>
              –
            </button>
          </div>
          <div>
            <button
              className="btn btn-outline-danger"
              onClick={() =>
                this.props.removeFromCart(
                  this.props.product,
                  this.state.qtyPerProduct !== 1
                    ? this.state.totalPricePerProduct
                    : this.props.product.price
                )
              }
            >
              remove
            </button>
          </div>
          <div>
            $
            {!this.state.totalPricePerProduct
              ? this.props.product.price
              : this.state.totalPricePerProduct}
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutCart;
