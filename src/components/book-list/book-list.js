import React, { Component } from "react";
import { connect } from "react-redux";

import BookListItem from "../book-list-item";
import withBookstoreService from "../hoc";
import {
  fetchBooks,
  bookAddedToCart,
} from "../../actions";
import Spinner from "../spinner";

import "./book-list.css";
import ErrorIndicator from "../error-indicator";

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={ book.id } className="card">
              <BookListItem
                book={ book }
                onAddedToCart={ () => onAddedToCart(book.id) }
                />
            </li>
          );
        })
      }
    </ul>
  );
}

class BookListContainer extends Component {
  componentDidMount() {
    const { fetchBooks } = this.props;
    fetchBooks();
  }

  render() {
    if (this.props.loading) {
      return <Spinner />
    }

    if (this.props.error) {
      return <ErrorIndicator problemName={ this.props.error.message }/>
    }

   return (
     <BookList
       books={ this.props.books }
       onAddedToCart={ this.props.onAddedToCart }
      />
   );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.bookList.books,
    loading: state.bookList.loading,
    error: state.bookList.error,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBooks: fetchBooks(dispatch, ownProps.bookstoreService),
    onAddedToCart: (id) => dispatch( bookAddedToCart(id) ) // dispatch action to store
  };
}

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
);