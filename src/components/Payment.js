import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "../axios";
import {emptyBasket} from "../actions"
import {db} from "../firebase"

function Payment({ dispatch, basket, authedUser, totalPrice }) {
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [proccessing, setProccessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  // first get client secret that changing with basket
  // confirm payment when submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProccessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
 
        db.collection('users').doc(authedUser?.uid).collection('orders')
        .doc(paymentIntent.id)
        .set ({
          basket:basket,
          amount:paymentIntent.amount,
          created:paymentIntent.created
        })
        setSucceeded(true);
        setError(null);
        setProccessing(false);
        dispatch(emptyBasket())
        history.replace("/orders"); //to not go back to this page
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  useEffect(() => {
    const getClientSecret = async () => {
      console.log(axios);
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${totalPrice * 100}`,
      });

      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log(clientSecret);
  return (
    <div className="payment">
      <div className="paymentContainer">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link> )
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{authedUser?.email}</p>
            <p>123 react lane</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review Items & Delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item,i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_price">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total : {value}</h3>}
                  decimalScale={2}
                  value={totalPrice}
                  displayType={"text"}
                  prefix={"$"}
                  thousandSeparator={true}
                />
              
              </div>
              <button disabled={proccessing || disabled || succeeded}>
                  <span>{proccessing ? <p>Proccessing</p> : "Buy Now"}</span>
                </button>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps({ basket, totalPrice, authedUser }) {
  console.log(basket)
  return { basket, totalPrice: basket.length === 0 ? 0 : totalPrice, authedUser };
}
export default connect(mapStateToProps)(Payment);
