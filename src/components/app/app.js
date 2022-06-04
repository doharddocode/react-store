import React from "react";

import ErrorBoundry from "../error-boundry/error-boundry";
import Header from "../header";
import { Pages } from "../pages";
import "./app.css"

const App = () => {
  return (
    <div className="re-store-app">
      <div className="container-fluid">
        <ErrorBoundry>
          <Header />
          <Pages />
        </ErrorBoundry>
      </div>
    </div>
  )
}

export default App;