import React, { Component } from "react";
import ShoppingCard from "./ShoppingCard";
class CardsList extends Component {
  render() {
    return (
      <div className="row">
        {this.props.products.length === 0 ? (
          <h4 className="not-found">No Product Found.</h4>
        ) : (
          <div className="col-md-12">
            <div className="row">
              {this.props.products.map((prod, index) => {
                return (
                  <ShoppingCard
                    product={prod}
                    key={index}
                    addToCart={p => this.props.addToCart(p)}
                  />
                );
              })}
            </div>
            <div className="row">
              <div className="offset-md-5">
                {this.props.visible <= this.props.products.length && (
                  <button
                    type="button"
                    className="btn btn-danger text-align-center"
                    onClick={() => this.props.loadMore()}
                  >
                    Load more
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CardsList;
