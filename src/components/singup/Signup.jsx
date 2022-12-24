import axios from "axios";
import React, { useEffect } from "react";
import "./signup.css";
import { useState } from "react";

function Signup() {
  document.title = "Create your account";

  const [countries, setCountries] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8585/csc/countries")
      .then((response) => {
        setCountries(response.data);
        // console.log(response.data)
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleState = (e) => {
    axios
      .get("http://localhost:8585/csc/states?country=" + e.target.value)
      .then((response) => {
        setState(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleCity = (e) => {
    axios
      .get("http://localhost:8585/csc/cities?state=" + e.target.value)
      .then((response) => {
        setCity(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className="signup-form">
        <h3>Create your account</h3>
        <form action="">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="john doe"
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="nickname">Nickname</label>
            <input
              type="text"
              name="nickname"
              id="nickname"
              placeholder="john"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Contact Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="9876543211"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@website.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="addressLine1">Address Line 1</label>
            <input
              type="text"
              name="addressLine1"
              id="addressLine1"
              placeholder="Flat no 101"
            />
          </div>
          <div className="form-group">
            <label htmlFor="addressLine2">Address Line 2</label>
            <input
              type="text"
              name="addressLine2"
              id="addressLine2"
              placeholder="Near XYZ School"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Postal / Zip Code</label>
            <input
              type="text"
              name="pincode"
              id="pincode"
              placeholder="765432"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select
              name="country"
              id="country"
              onChange={(e) => handleState(e)}
            >
              <option>-------select-------</option>
              {countries.map((item, key) => (
                <option key={key} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <select name="state" id="state" onChange={(e) => handleCity(e)}>
              {/* <option>-------select-------</option> */}
              {state.map((item, key) => (
                <option key={key} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <select name="city" id="city">
              {/* <option>---- Select ----</option> */}
              {city.map((item, key) => (
                <option key={key} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter password</label>
            <input
              type="text"
              name="password"
              id="password"
              autoComplete="off"
              placeholder="enter password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              autoComplete="off"
              placeholder="confirm password"
            />
          </div>
          <div className="form-group">
            <button>Create account</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
