import React from "react";

import "./book-list-item.css"

const BookListItem = ({ book, onAddedToCart, isItemAddedToCart }) => {
  const { name, author, price, coverImage } = book;

  return (
    <div className="book-item">
      <img src={ coverImage } className="card-img-top book-thumbnail" alt="book" />
      <div className="card-body">
        <h5 className="card-title">{ name }</h5>
        <ul className="list-group">
          <li className="list-group-item card-text">
            <span className="key">Author:</span>
            <span className="value">{ author }</span>
          </li>
          <li className="list-group-item card-text">
            <span className="key">Price:</span>
            <span className="value">{ price.value }</span>
            <span className="currency">{ price.currency }</span>
          </li>
        </ul>
        <button
          className="btn btn-primary add-to-cart"
          onClick={ onAddedToCart }
          >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default BookListItem;