import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/ShoppingCard.css";

class ShoppingCard extends Component {
  constructor() {
    super();
    this.state = {
      isAdded: false
    };
  }

  render() {
    const { image, title, desc, price, category, _id } = this.props.product;
    return (
      <div className="col-md-4 mb-5">
        <div className="card">
          <Link to={`/product/${_id}`}>
            <img className="card-img-top" src={image} alt={title} />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <div className="price-addChart">
              <span className="price">{price} TND</span>
              <button
                className="btn btn-success"
                onClick={() => {
                  this.setState(
                    {
                      isAdded: true
                    },
                    () => this.props.addToCart(this.props.product)
                  );
                }}
              >
                {!this.state.isAdded ? "Add to cart" : <i>Added &#9989;</i>}
              </button>
            </div>
            <div className="more-details">
              <Link to={`/product/${_id}`}>More details</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCard;
