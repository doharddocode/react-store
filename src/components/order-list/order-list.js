import React, { Fragment } from "react";
import { connect } from "react-redux";

import "./order-list.css"
import OrderListItem from "../order-list-item/order-list-item";
import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart
} from "../../actions";

const OrderList = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  return (
    <Fragment>
      <table className="table order-list">
        <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Item</th>
          <th scope="col">Count</th>
          <th scope="col">Total</th>
          <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        {
          items.map((item, idx) => {
            return (
              <tr key={ idx }>
                <OrderListItem
                  onIncrease={ onIncrease }
                  onDecrease={ onDecrease }
                  onDelete={ onDelete }
                  item={ item }
                  idx={ idx + 1 }
                />
              </tr>
            );
          })
        }
        </tbody>
      </table>

      <div className="total-price">
        <span className="key">Total: </span>
        <span className="value">{ total }</span>
        <span className="currency">$</span>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.orderCart.cartItems,
    total: state.orderCart.cartTotal,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: (id) => dispatch( bookAddedToCart(id) ),
    onDecrease: (id) => dispatch( bookRemovedFromCart(id) ),
    onDelete: (id) => dispatch( allBooksRemovedFromCart(id) ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);