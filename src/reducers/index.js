import updateBookList from "./bookList";
import { updateOrderCart } from "./orderCart";

const initialState = {
  bookList: {
    books: [],
    loading: true,
    error: null,
  },
  orderCart: {
    cartItems: [],
    cartTotal: 0
  },
}

const reducer = (state = initialState, action) => {
  return {
    bookList: updateBookList(state, action),
    orderCart: updateOrderCart(state, action),
  }
}

export default reducer;