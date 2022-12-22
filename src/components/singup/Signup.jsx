import React from "react";
import "./signup.css";

function Signup() {
  return (
    <>
      <div className="signup-form">
        <h3>Create your account</h3>
        <form action="">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="nickname">Nickname</label>
            <input type="text" name="nickname" id="nickname" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Contact Number</label>
            <input type="text" name="phone" id="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="addressLine1">Address Line 1</label>
            <input type="text" name="addressLine1" id="addressLine1" />
          </div>
          <div className="form-group">
            <label htmlFor="addressLine2">Address Line 2</label>
            <input type="text" name="addressLine2" id="addressLine2" />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Postal / Zip Code</label>
            <input type="text" name="pincode" id="pincode" />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select name="country" id="country">
              <option>Select</option>
              <option value="india">India</option>
              <option value="india">USA</option>
              <option value="india">India</option>
              <option value="india">India</option>
              <option value="india">India</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
