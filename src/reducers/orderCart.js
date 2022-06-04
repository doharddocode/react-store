const updateOrder = (state, action, quantity) => {
  const { orderCart: { cartItems }, bookList: { books } } = state;

  const bookId = action.payload;
  const book = books.find((item) => item.id === bookId);
  const bookInCartId = cartItems.findIndex((item) => item.id === bookId);
  const bookInCart = cartItems[bookInCartId];
  const newItem = updateItem(book, bookInCart, quantity);
  const ItemsInCartUpdated = updateOrderItems(cartItems, newItem, bookInCartId);
  let cartTotal = 0;
  ItemsInCartUpdated.map((item) => cartTotal += item.count * item.price.value);

  return {
    cartTotal,
    cartItems: ItemsInCartUpdated
  }
}

const updateOrderItems = (cartItems, newItem, bookInCartId) => {
  if (newItem.count === 0) {
    return [
      ...cartItems.slice(0, bookInCartId),
      ...cartItems.slice(bookInCartId + 1)
    ]
  }

  if (bookInCartId === -1) {
    return [
      ...cartItems,
      newItem
    ];
  }

  return [
    ...cartItems.slice(0, bookInCartId),
    newItem,
    ...cartItems.slice(bookInCartId + 1)
  ];
}

const updateItem = (book, bookInCart, quantity) => {
  if (bookInCart === undefined) {
    return {
      ...book,
      count: 1,
      total: book.price.value
    };
  }

  return {
    ...bookInCart,
    count: Number(bookInCart.count) + quantity,
    total: bookInCart.total + quantity * book.price.value
  }
}

const updateOrderCart = (state, action) => {
  switch (action.type) {
    case "BOOK_ADDED_TO_CART":
      return updateOrder(state, action, 1);

    case "BOOK_REMOVED_FROM_CART":
      return updateOrder(state, action, -1);

    case "ALL_BOOKS_REMOVED_FROM_CART":
      const itemId = action.payload;
      const item = state.orderCart.cartItems.find((item) => item.id === itemId);

      return updateOrder(state, action, -item.count);

    case "SHOW_SUCCESS_ADDED_MESSAGE":


    default:
      return state.orderCart;
  }
}

export {
  updateOrderCart,
}