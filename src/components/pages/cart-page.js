import React, { Fragment } from "react";
import OrderList from "../order-list";

const CartPage = () => {
  return (
    <Fragment>
      <h1 className="page-title">You order</h1>

      <div className="page-content">
        <OrderList />
      </div>
    </Fragment>
  );
}

export default CartPage;