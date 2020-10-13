import React from "react";
import { connect } from "react-redux";
import { addToBasket } from "../actions";
function Product({ id, title, image, price, rating, dispatch }) {
  const AddToBasket = () => {
    const item = { id, title, image, price, rating };
    dispatch(addToBasket(item));
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={AddToBasket}>Add to Basket</button>
    </div>
  );
}

export default connect()(Product);
