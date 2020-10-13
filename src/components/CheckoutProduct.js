import React from "react";
import { connect } from "react-redux";
import { removeFromBasket } from "../actions";

function CheckoutProduct({ hiddenButton,dispatch, id, image, title, price, rating }) {
  const removeProduct = () => {
    const item = { id, image, title, price, rating };
    dispatch(removeFromBasket(item));
  };
  return (
    <div className="checkotProduct">
      <img src={image} alt="" />
      <div className="checkotProduct_info">
        <p className="checkotProduct_title">{title}</p>
        <p className="checkotProduct_price">
          <small>$</small>
          <strong> {price}</strong>
        </p>
        <div className="checkotProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>{
        !hiddenButton && <button onClick={removeProduct}>Remove from Basket</button>
        }
        </div>
    </div>
  );
}

export default connect()(CheckoutProduct);
