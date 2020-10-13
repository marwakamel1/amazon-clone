import React from "react";
import CurrencyFormat from "react-currency-format";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
function Subtotal({ dispatch, basket, totalPrice }) {
  const history = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items ) :<strong> {value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={totalPrice}
        displayType={"text"}
        prefix={"$"}
        thousandSeparator={true}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}
function mapStateToProps({ basket, totalPrice }) {
  return { basket, totalPrice: basket.length === 0 ? 0 : totalPrice };
}
export default connect(mapStateToProps)(Subtotal);
