import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../firebase";

function Header({ dispatch, basket, authedUser }) {
  const handleAuth = () => {
    if (authedUser) auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png"
          alt=""
        />
      </Link>

      <div className="header_search">
        <input className="header_input" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!authedUser && "/login"}>
          <div className="header_option" onClick={handleAuth}>
            <span className="option_line1">
              Hello {authedUser ? `${authedUser?.email}` : "Guest"}
            </span>
            <span className="option_line2">
              {authedUser ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
        <div className="header_option">
          <span className="option_line1">Returns</span>
          <span className="option_line2">& Orders</span>
        </div>
        </Link>
        <div className="header_option">
          {" "}
          <span className="option_line1">Your</span>
          <span className="option_line2">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="headerBasket">
          <ShoppingBasketIcon />
          <span className="option_line2 basketCount">{basket?.length}</span>
        </div>
      </Link>
    </div>
  );
}
function mapStateToProps({ basket, authedUser }) {
  return { basket, authedUser };
}
export default connect(mapStateToProps)(Header);
