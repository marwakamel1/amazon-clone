import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "../firebase";
import { connect } from "react-redux";
import { deleteUser, setUser } from "../actions";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51Has1KDI3uu0sBtMRrXAOFVlycFdt7QH4GLIGY4BRWNn85YoaVWs5dYUGnwiv9Janv6GqCCdfLtxgS01ZS52mgSg00QaoFymyw"
);
function App({ dispatch }) {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(deleteUser());
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default connect()(App);
