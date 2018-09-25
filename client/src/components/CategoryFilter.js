import React, { Component } from "react";
import ShoppingCard from "./ShoppingCard";
import CategoriesNav from "./CategoriesNav";

class CategoriesFilter extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <CategoriesNav />
          {this.props.products
            .filter(product => {
              switch (this.props.category) {
                case "pcs":
                  return product.category === "pcs";
                case "games":
                  return product.category === "games";
                case "clothes":
                  return product.category === "clothes";
                case "house":
                  return product.category === "house";
                case "phones":
                  return product.category === "phones";
                default:
                  break;
              }
            })
            .map((prod, index) => {
              return (
                <ShoppingCard
                  product={prod}
                  key={index}
                  addToCart={p => this.props.addToCart(p)}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default CategoriesFilter;
