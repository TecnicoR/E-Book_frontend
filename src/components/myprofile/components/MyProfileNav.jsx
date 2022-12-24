import React from "react";
import { Link } from "react-router-dom";
import './myprofilenav.css'

function MyProfileNav() {
  return (
    <div className="my-profile-nav">
      <ul>
        <li>
          <Link to="/editProfile">Edit Profile</Link>
        </li>
        <li>
          <Link>Change password</Link>
        </li>
        <li>
          <Link>My Orders</Link>
        </li>
        <li>
          <Link>Manage Addresses</Link>
        </li>
        <li>
          <Link>Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}

export default MyProfileNav;
