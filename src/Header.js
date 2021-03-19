import React from "react";
import "./Header.css";
import img from "./amazon.png";
import SearchIcon from "@material-ui/icons/Search";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img className="header_logo" alt="amazon logo" src={img} />
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello, Guest</span>
          <span className="header_optionlineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionlineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionlineTwo">Prime</span>
        </div>
        <div className="header_optionBasket">
                  <ShoppingBasketIcon />
                  <span className="header_basketCount">0</span>
        </div>
            
      </div>
    </div>
  );
}

export default Header;
