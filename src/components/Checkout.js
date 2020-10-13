import React from "react";
import Subtotal from "./Subtotal";
import { connect } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";

function Checkout({ basket, dispatch, authedUser }) {
  console.log(basket);
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/LPAOffers/April/Prime/Store/V2/LPA501_1500x250.jpg"
          alt=""
        />
        <div className="checkout_title">
          <h3>Hello, {authedUser?.email}</h3>
          <h2>Your shopping Basket</h2>
        </div>
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
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}
function mapStateToProps({ basket, authedUser }) {
  return { basket, authedUser };
}
export default connect(mapStateToProps)(Checkout);
