const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST",
  }
}

const booksLoaded = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks
  }
}

const booksLoadingError = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error
  }
}

const bookAddedToCart = (id) => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: id
  }
}

const bookRemovedFromCart = (id) => {
  return {
    type: "BOOK_REMOVED_FROM_CART",
    payload: id
  }
}

const allBooksRemovedFromCart = (id) => {
  return {
    type: "ALL_BOOKS_REMOVED_FROM_CART",
    payload: id
  }
}

const showSuccessMessageAddedToCart = () => {
  return {
    type: "SHOW_SUCCESS_MESSAGE_ADDED_TO_CART"
  }
}

const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch( booksRequested() );
  bookstoreService.getBooks()
    .then((data) => {
      dispatch( booksLoaded(data) );
    })
    .catch((err) => {
      dispatch( booksLoadingError(err) );
    })
}

export {
  fetchBooks,
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart,
  showSuccessMessageAddedToCart
}