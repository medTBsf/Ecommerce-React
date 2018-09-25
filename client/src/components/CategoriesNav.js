import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/CategoriesNav.css";

class CategoriesNav extends Component {
  render() {
    return (
      <div className="col-md-2">
        <nav className="nav flex-column navbar-dark bg-dark categorie-nav">
          <Link className="nav-link" to="/categories/pcs">
            PCs
          </Link>
          <Link className="nav-link" to="/categories/games">
            Games
          </Link>
          <Link className="nav-link" to="/categories/phones">
            Phones
          </Link>
          <Link className="nav-link" to="/categories/clothes">
            Clothes
          </Link>
          <Link className="nav-link" to="/categories/house">
            House
          </Link>
        </nav>
      </div>
    );
  }
}

export default CategoriesNav;
