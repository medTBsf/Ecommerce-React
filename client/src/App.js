import React, { Component } from "react";

import "./App.css";

import { BrowserRouter, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import CardsList from "./components/CardsList";
//import products from "./products/Products";
import CheckoutCartList from "./components/CheckoutCartList";
import CategoriesNav from "./components/CategoriesNav";
import CategoriesFilter from "./components/CategoryFilter";
import Search from "./components/Filtering/Search";
import ProductInfo from "./components/ProductInfo";
import PurchaseForm from "./components/PurchaseForm";
import Carousel from "./components/Carousel";
import PaymentSuccess from "./components/PaymentSucces";

import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      shopCardQty: 0,
      checkoutCarts: [],
      totalPrice: 0,
      visible: 6,
      nameProductFilter: "",
      priceProductFilter: 0
    };
  }

  loadMore = () => {
    if (this.state.products.length > this.state.visible) {
      this.setState({
        visible: this.state.visible + 6
      });
    } else {
      return;
    }
  };

  addToCart = p => {
    const findProduct = this.state.checkoutCarts.find(product => {
      return p.title === product.title;
    });

    if (!findProduct || this.state.checkoutCarts.length === 0) {
      this.setState({
        shopCardQty: this.state.shopCardQty + 1,
        checkoutCarts: this.state.checkoutCarts.concat(p),
        totalPrice: this.state.totalPrice + p.price
      });
    } else {
      return;
    }
  };

  getTotalPriceAfterIncrement = product => {
    this.setState({
      totalPrice: this.state.totalPrice + product.price
    });
  };

  getTotalPriceAfterDecrement = product => {
    this.setState({
      totalPrice: Math.max(product.price, this.state.totalPrice - product.price)
    });
  };

  removeFromCart = (p, totalPerProduct) => {
    this.setState({
      shopCardQty: this.state.shopCardQty - 1,
      checkoutCarts: this.state.checkoutCarts.filter(product => {
        return product.title !== p.title;
      }),
      totalPrice: Math.max(0, this.state.totalPrice - totalPerProduct)
    });
  };

  resetShoppingCart = () => {
    this.setState({
      shopCardQty: 0,
      checkoutCarts: [],
      totalPrice: 0
    });
  };

  sortByProductName = e => {
    this.setState({ nameProductFilter: e.target.value });
  };

  sortByProductPrice = priceFilter => {
    this.setState({
      priceProductFilter: priceFilter
    });
  };

  componentDidMount = () => {
    axios
      .get("/home")
      .then(res => {
        this.setState({
          products: res.data
        });
      })
      .catch(err => {
        console.log(err.data);
      });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar totalQty={this.state.shopCardQty} />
          <div>
            <Route
              path="/"
              exact
              render={() => (
                <div className="login-zone">
                  <Link to="/home">
                    <button className="btn btn-outline-dark login-btn">
                      login
                    </button>
                  </Link>
                </div>
              )}
            />
            <Route
              path="/home"
              exact
              render={() => {
                return (
                  <div className="container-fluid">
                    <div className="row">
                      <CategoriesNav />
                      <div className="col-md-10">
                        <Search
                          sortByProductName={this.sortByProductName}
                          sortByProductPrice={priceFilter =>
                            this.sortByProductPrice(priceFilter)
                          }
                        />
                        <Carousel />
                        <CardsList
                          products={this.state.products
                            .slice(0, this.state.visible)
                            .filter(product => {
                              return (
                                product.title
                                  .toLowerCase()
                                  .indexOf(this.state.nameProductFilter) !==
                                  -1 &&
                                this.state.priceProductFilter <= product.price
                              );
                            })}
                          addToCart={p => this.addToCart(p)}
                          loadMore={this.loadMore}
                          visible={this.state.visible}
                        />
                      </div>
                    </div>
                  </div>
                );
              }}
            />

            <Route
              path="/checkout"
              exact
              render={() => (
                <CheckoutCartList
                  checkoutCarts={this.state.checkoutCarts}
                  qtyPerProduct={this.state.qtyPerProduct}
                  totalPrice={this.state.totalPrice}
                  removeFromCart={(p, totalPerProduct) =>
                    this.removeFromCart(p, totalPerProduct)
                  }
                  getTotalPriceAfterIncrement={product =>
                    this.getTotalPriceAfterIncrement(product)
                  }
                  getTotalPriceAfterDecrement={product =>
                    this.getTotalPriceAfterDecrement(product)
                  }
                  resetShoppingCart={this.resetShoppingCart}
                />
              )}
            />

            <Route
              path="/categories/:category"
              exact
              strict
              render={props => (
                <CategoriesFilter
                  category={props.match.params.category}
                  products={this.state.products}
                  addToCart={p => this.addToCart(p)}
                />
              )}
            />
            <Route
              path="/product/:id"
              exact
              strict
              render={props => {
                return (
                  <ProductInfo
                    parameters={props.match.params}
                    product={this.state.products.find(product => {
                      return product._id === props.match.params.id;
                    })}
                  />
                );
              }}
            />
            <Route
              path="/payment-process/:priceToPay"
              exact
              render={props => {
                return (
                  <PurchaseForm priceToPay={props.match.params.priceToPay} />
                );
              }}
            />
            <Route
              path="/payment-success"
              exact
              render={() => <PaymentSuccess />}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
