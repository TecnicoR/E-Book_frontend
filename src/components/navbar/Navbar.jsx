import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="header">
        <div className="left">
        <Link to="/">
          <img
            className="logo"
            src="assets/images/logo.png"
            alt="The Last Chapter"
          />
           </Link>
        </div>
        <div className="mid">
          <form action="" className="search-form">
            <input
              type="text"
              name="q"
              id="q"
              placeholder="type here to read..."
            />
            <input type="submit" value="Search" />
          </form>
        </div>
        <div className="right">
          <ul className="menu">
            <li>
              <Link to="/">
                <img src="assets/icons/home.png" alt="Home" />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <img src="assets/icons/shopping-cart.png" alt="Cart" />
              </Link>
            </li>
            <li>
              <Link to="/myprofile">
                <img src="assets/icons/user.png" alt="User" />
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                style={{ borderInline: "2px solid blue", padding: "2px 6px" }}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                style={{
                  padding: "4px 8px",
                  backgroundColor: "blue",
                  color: "white",
                }}
              >
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
