import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="header">
        <div className="left">
          <img
            className="logo"
            src="assets/images/logo.png"
            alt="The Last Chapter"
          />
        </div>
        <div className="mid">
          <form action="" className="search-form">
            <input
              type="text"
              name="q"
              id="q"
              placeholder="type here to search..."
            />
            <input type="submit" value="Search" />
          </form>
        </div>
        <div className="right">
          <ul className="menu">
            <li>
              <Link to="/">
                <span class="material-symbols-sharp">home</span>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <span class="material-symbols-sharp">shopping_cart</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span class="material-symbols-sharp">account_circle</span>
              </Link>
            </li>
            <li>
              <Link to="/" style={{borderInline : "2px solid blue", padding : "2px 6px"}}>
                {/* <span class="material-symbols-sharp">login</span> */}
                Login
              </Link>
            </li>
            <li>
              <Link to="/" style={{padding : "4px 8px", backgroundColor : "blue", color : "white"}}>
                {/* <span class="material-symbols-sharp">logout</span> */}
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
