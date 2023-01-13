import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, userLogin } from "../../services/UserService";
import Loader from "../loader/Loader";
import "./login.css";

function Login() {
  document.title = "Login";
  const navigate = useNavigate();
  const [errors, setErrors] = useState();
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(false);

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

  function doLogin() {
    if (true) {
      setLoader(true);
      userLogin(data)
        .then((res) => {
          localStorage.setItem("auth", res?.accessToken);
          localStorage.setItem("userName", res?.userName);
          localStorage.setItem("userId", res?.userId);
          toast.success("Welcome back ", res?.userName);
          console.log(res);
          navigate("/");
        })
        .catch((err) => {})
        .finally(() => {
          setLoader(false);
        });
    }
  }

  function validate() {
    let temp = { ...errors };
    if (!data?.email) {
      temp["email"] = "Required";
    } else {
      let regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let isEmailValid = regex.test(data?.email.toLowerCase());
      if (!isEmailValid) {
        temp["email"] = "Invalid Email";
      } else {
        delete temp["email"];
      }
    }
    if (!data?.password) {
      temp["password"] = "Required";
    } else {
      let regex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      let isPasswordValid = regex.test(data?.password);
      if (!isPasswordValid) {
        temp["password"] =
          "Minimum eight characters, at least one letter, one number and one special character";
      } else {
        delete temp["password"];
      }
    }
    setErrors(temp);
    return temp?.length === 0 ? true : false;
  }
  return (
    <>
      {loader ? <Loader /> : ""}
      <div className="login-form">
        <h3>
          Welcome back ! <br /> login here
        </h3>
        <div className="form" >
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              autoFocus
              autoComplete="off"
              placeholder="example@website.com"
              id="username"
              value={data?.email}
              onChange={(event) => {
                onValueChange("email", event.target.value);
              }}
            />
            <p className="errorMessage">{errors?.email}</p>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              autoComplete="off"
              placeholder="enter password"
              value={data?.password}
              onChange={(event) => {
                onValueChange("password", event.target.value);
              }}
            />
            <p className="errorMessage">{errors?.password}</p>
          </div>
          <div className="form-group">
            <button onClick={() => doLogin()}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
