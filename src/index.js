import React from "react";
import ReactDOM from "react-dom"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./components/app";
import BookstoreService from "./services/bookstore-service";
import { BookstoreServiceProvider } from "./components/book-store-service-context";
import store from "./store";
import ErrorBoundry from "./components/error-boundry/error-boundry";

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);