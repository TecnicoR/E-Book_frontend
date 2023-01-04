import React, { useEffect } from "react";
import "./signup.css";
import { useState } from "react";
import {
  getAllCities,
  getAllCountries,
  getAllStates,
} from "../../services/LocationService";
import { createUser } from "../../services/UserService";

function Signup() {
  document.title = "Create your account";

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [data, setData] = useState({});

  useEffect(() => {
    if (!countries || countries?.length === 0)
      getAllCountries()
        .then((res) => {
          // console.log("res", res);
          setCountries(res);
        })
        .catch((err) => console.log("err", err));
  }, []);

  useEffect(() => {
    if (data?.address?.country) {
      setStates([]);
      setCities([]);
      getAllStates(data?.address?.country)
        .then((res) => {
          // console.log("res of states", res);
          setStates(res);
        })
        .catch((err) => console.log("err", err));
    }
  }, [data?.address?.country]);

  useEffect(() => {
    if (data?.address?.state) {
      setCities([]);
      getAllCities(data?.address?.state)
        .then((res) => {
          // console.log("res of cities", res);
          setCities(res);
        })
        .catch((err) => console.log("err", err));
    }
  }, [data?.address?.state]);

  function onValueChange(source, value) {
    const temp = { ...data };

    if (typeof value === "object") {
      if (!temp[source]) {
        temp[source] = {};
      }
    }

    temp[source] = value;

    setData(temp);
    // console.log(data);
  }

  function createAccount() {
    // console.log("data ", data);
    createUser(data)
      .then((res) => {
        alert("Successfully created the user", res?.id);

      })
      .catch((err) => {
        alert("Error occured:", err?.message);
      });
  }

  return (
    <>
      <div className="signup-form">
        <h3>Create your account</h3>
        <div>
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
              value={data?.email}
              onChange={(event) => {
                onValueChange("email", event.target.value);
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
                  state: "",
                  city: "",
                });
              }}
            >
              <option>-------select-------</option>
              {countries?.map((item, key) => (
                <option key={key} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <select
              name="state"
              id="state"
              value={data?.address?.state}
              onChange={(event) => {
                onValueChange("address", {
                  ...data?.address,
                  state: event.target.value,
                  city: "",
                });
              }}
            >
              {/* <option>-------select-------</option> */}
              {states?.map((item, key) => (
                <option key={key} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <select
              name="city"
              id="city"
              value={data?.address?.city}
              onChange={(event) => {
                onValueChange("address", {
                  ...data?.address,
                  city: event.target.value,
                });
              }}
            >
              {/* <option>---- Select ----</option> */}
              {cities?.map((item, key) => (
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
          <div className="form-group1">
            <div onClick={() => createAccount()}>Create Account</div>
            {/* <button onClick={() => createAccount()}>Create account</button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
