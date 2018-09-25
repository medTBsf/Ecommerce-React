import React, { Component } from "react";
import "../../styles/Search.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }
  render() {
    return (
      <div className="row search-zone">
        <div className="col-md-4">
          <div className="input-group mb-3 input-zone">
            <input
              type="text"
              className="form-control"
              placeholder="Product's name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={this.props.sortByProductName}
            />
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">
                Search
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4 slidecontainer">
          <label className="max-price">Min price : </label>
          <input
            className="input-max-price"
            type="number"
            min="0"
            onChange={e => {
              this.setState(
                {
                  value: e.target.value
                },
                () => this.props.sortByProductPrice(this.state.value)
              );
            }}
          />
          {/*  <input
            type="range"
            min="20"
            max="2000"
            step="1"
            className="slider"
            onChange={e => {
              this.setState(
                {
                  value: e.target.value
                },
                () => this.props.sortByProductPrice(this.state.value)
              );
            }}
          /> <span>{this.state.value}</span>*/}
        </div>
      </div>
    );
  }
}

export default Search;
