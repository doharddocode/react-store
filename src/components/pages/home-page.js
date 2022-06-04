import React, { Fragment } from "react";

import "./page.css"
import BookListContainer from "../book-list/book-list";

const HomePage = () => {
  return (
    <Fragment>
      <h1 className="page-title">Shop</h1>

      <div className="page-content">
        <BookListContainer />
      </div>
    </Fragment>
  );
}

export default HomePage;