import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./header.css"

const Header = ({ totalPrice, totalItemsCount }) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <header className="header">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container-fluid">
              <div className="navbar-brand">
                <Link to="/">React Redux Store</Link>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="cart-total">
                  <div className="items-counter">
                    <Link to="cart">
                      <span className="key">{ totalItemsCount }</span>
                      <span className="value">items</span>
                    </Link>
                  </div>

                  <div className="items-price">
                    (
                    <span className="currency">$</span>
                    <span className="value">{ totalPrice }</span>
                    )
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const totalPrice = state.orderCart.cartTotal;
  let totalItemsCount = 0;
  state.orderCart.cartItems.map((item) => totalItemsCount += item.count);

  return {
    totalPrice,
    totalItemsCount,
  }
}

export default connect(mapStateToProps)(Header);