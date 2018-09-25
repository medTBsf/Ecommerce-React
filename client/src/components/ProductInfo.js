import React, { Component } from "react";
import "../styles/ProductInfo.css";
import ReactImageMagnify from "react-image-magnify";
import { Link } from "react-router-dom";

class ProductInfo extends Component {
  render() {
    const { image, title, desc, price, category } = this.props.product;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="product-image">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "",
                    isFluidWidth: true,
                    src: image
                  },
                  largeImage: {
                    src: image,
                    width: 900,
                    height: 900
                  },
                  isHintEnabled: true
                }}
              />
            </div>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="row">
              <div className="title">
                <h1>{title}</h1>
                <h6>{category}</h6>
                <hr />
              </div>
              <div className="description">
                <h3>{desc}</h3>
              </div>

              <div className="commerce-zone">
                <div className="price">{price} TND</div>
                <div className="buy-button">
                  <Link to={`/payment-process/${price}`}>
                    <button className="buy-now">Buy now</button>
                  </Link>
                </div>
              </div>
              <div className="back-to-shop">
                <Link to="/home">
                  <button className="btn btn-outline-secondary">
                    Back to Shopping
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductInfo;
