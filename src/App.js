import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./includes/Home";
import "antd/dist/antd.css";
import Paymentpage from "./includes/Payment";
import ThankYouPage from "./includes/Thankyou";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/payment" component={Paymentpage} />
        <Route exact path="/thankyou" component={ThankYouPage} />
      </Switch>
    </Router>
  );
}

export default App;
