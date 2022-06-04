import React, { Fragment } from "react";

const OrderListItem = ({ onIncrease, onDecrease, onDelete, item, idx }) => {
  return (
    <Fragment>
      <th scope="row">{ idx }</th>
      <td>{ item.name }</td>
      <td>{ item.count }</td>
      <td>
        <span className="value">{ item.total }</span>
        <span className="currency">$</span>
      </td>
      <td>
        <div className="actions">
          <i className="fas fa-plus-square inc" onClick={() => onIncrease(item.id) }></i>
          <i className="fas fa-minus-square dec" onClick={() => onDecrease(item.id) }></i>
          <i className="fas fa-trash remove" onClick={() => onDelete(item.id) }></i>
        </div>
      </td>
    </Fragment>
  )
}

export default OrderListItem;