import React from "react";
import { BookstoreServiceConsumer } from "../book-store-service-context";

const withBookstoreService = () => (Wrapper) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            return (
              <Wrapper
                {...props}
                bookstoreService={ bookstoreService } />
            );
          }
        }
      </BookstoreServiceConsumer>
    );
  }
}

export default withBookstoreService;