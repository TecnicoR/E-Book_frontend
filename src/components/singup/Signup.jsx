import axios from "axios";
import React, { useEffect } from "react";
import "./signup.css";
import { useState } from "react";

function Signup() {
  document.title = "Create your account";

  const [countries, setCountries] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  const [data, setData] = useState({});

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

  useEffect(() => {
    if (data?.address?.country) {
      handleState();
    }
  }, [data?.address?.country]);

  const handleState = () => {
    axios
      .get("http://localhost:8585/csc/states?country=" + data?.address?.country)
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

  function onValueChange(source, value) {
    const temp = { ...data };

    if (typeof value === "object") {
      if (!temp[source]) {
        temp[source] = {};
      }
    }

    temp[source] = value;

    setData(temp);
    console.log(data);
  }
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
              value={data?.name}
              onChange={(event) => {
                onValueChange("name", event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nickname">Nickname</label>
            <input
              type="text"
              name="nickname"
              id="nickname"
              placeholder="john"
              value={data?.nickname}
              onChange={(event) => {
                onValueChange("nickname", event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Contact Number</label>
            <input
              type="text"
              name="phphoneNumberone"
              id="phphoneNumberone"
              placeholder="9876543211"
              value={data?.phoneNumber}
              onChange={(event) => {
                onValueChange("phoneNumber", event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@website.com"
              value={data?.phonemaileNumber}
              onChange={(event) => {
                onValueChange("phoneNumemailber", event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="addressLine1">Address Line 1</label>
            <input
              type="text"
              name="addressLine1"
              id="addressLine1"
              placeholder="Flat no 101"
              value={data?.address?.addressLine1}
              onChange={(event) => {
                onValueChange("address", {
                  ...data?.address,
                  addressLine1: event.target.value,
                });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="addressLine2">Address Line 2</label>
            <input
              type="text"
              name="addressLine2"
              id="addressLine2"
              placeholder="Near XYZ School"
              value={data?.address?.addressLine2}
              onChange={(event) => {
                onValueChange("address", {
                  ...data?.address,
                  addressLine2: event.target.value,
                });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Postal / Zip Code</label>
            <input
              type="text"
              name="pincode"
              id="pincode"
              placeholder="765432"
              value={data?.address?.pincode}
              onChange={(event) => {
                onValueChange("address", {
                  ...data?.address,
                  pincode: event.target.value,
                });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select
              name="country"
              id="country"
              value={data?.address?.country}
              onChange={(event) => {
                onValueChange("address", {
                  ...data?.address,
                  country: event.target.value,
                });
              }}
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
            <button >Create account</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
