import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { toast } from "react-toastify";
import {
  confirmAccount,
  createUser,
  getVerification,
} from "../../services/UserService";
import store from "../../store";
import { userActions } from "../../store/actions";
import Loader from "../loader/Loader";
import "./signup.css";
function Signup() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [errors, setErrors] = useState();
  //   status = 1 means email, phone , 2 means enter otp, 3 means password
  const [status, setStatus] = useState(1);
  const [response, setResponse] = useState({});
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

  function validate() {
    let temp = { ...errors };
    if (!data?.name) {
      temp["name"] = "Required";
    } else {
      delete temp["name"];
    }
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
    if (!data?.phone) temp["phone"] = "Required";
    else {
      if (data?.phone && data?.phone?.length !== 10) {
        temp["phone"] = "Invalid Phone";
      } else {
        delete temp["phone"];
      }
    }
    if (!data?.phoneOtp) temp["phoneOtp"] = "Required";
    else {
      if (data?.phoneOtp && data?.phoneOtp?.length !== 6) {
        temp["phoneOtp"] = "Invalid Otp, should be 6 characters";
      } else {
        delete temp["phoneOtp"];
      }
    }

    if (!data?.emailOtp) temp["emailOtp"] = "Required";
    else {
      if (data?.emailOtp && data?.emailOtp?.length !== 6) {
        temp["emailOtp"] = "Invalid Otp, should be 6 characters";
      } else {
        delete temp["emailOtp"];
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
    if (!data?.confirmPassword) {
      temp["confirmPassword"] = "Required";
    } else if (data?.confirmPassword !== data?.password) {
      temp["confirmPassword"] = "Passwords does not match";
    } else {
      let regex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      let isPasswordValid = regex.test(data?.confirmPassword);
      if (!isPasswordValid) {
        temp["confirmPassword"] =
          "Minimum eight characters, at least one letter, one number and one special character";
      } else {
        delete temp["confirmPassword"];
      }
    }
    setErrors(temp);
    return temp?.length === 0 ? true : false;
  }

  function sendOtp() {
    // console.log("data ", data);
    if (validate()) {
      setLoader(true);
      createUser(data)
        .then((res) => {
          setData({ phoneOtp: "", emailOtp: "" });
          // alert("Successfully created the user", res?.id);
          console.log("Send Otp method ", res);
          setStatus(2);
          setResponse(res);
          toast.success("Please enter OTP sent to your email and phone");
        })
        .catch((err) => {
          // console.log(err);
          // alert("Error occured:", err?.message);
          toast.error(err?.response?.data?.message);
        })
        .finally(() => {
          setLoader(false);
        });
    }
  }

  function verifyOtp() {
    console.log("data ", data);
    setErrors(null)
    if (validate()) {
      setLoader(true);
      getVerification(response?.id, data)
        .then((res) => {
          setData(null);
          // alert("Successfully created the user", res?.id);
          console.log("Verify Otp ", res);
          setResponse(res);
          setStatus(3);
          toast.success("Verified Please enter password");
        })
        .catch((err) => {
          console.log(err);
          // alert("Error occured:", err?.message);
          toast.error(err?.response?.data?.message);
        })
        .finally(() => {
          setLoader(false);
        });
    }
  }

  function createAccount() {
    // console.log("data ", data);
    if (validate()) {
      setLoader(true);
      confirmAccount(response?.id, data)
        .then((res) => {
          // alert("Successfully created the user", res?.id);
          console.log("Confirm ", res);
          setData(null);
          setResponse(res);
          setStatus(4);
          toast.success("Success, Now you can order");
          store.dispatch(userActions.updateUserData(res))
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          // alert("Error occured:", err?.message);
          toast.error(err?.response?.data?.message);
        })
        .finally(() => {
          setLoader(false);
        });
    }
  }

  function renderEmailPhone() {
    return (
      <>
        <div className="signup-form">
          <h3 style={{ marginTop: "35px", marginBottom: "20px" }}>
            Hi lets get started !
          </h3>
          <div className="form">
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
              <p className="errorMessage">{errors?.name}</p>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Contact Number</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="9876543211"
                value={data?.phone}
                onChange={(event) => {
                  onValueChange("phone", event.target.value);
                }}
              />
              <p className="errorMessage">{errors?.phone}</p>
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
              <p className="errorMessage">{errors?.email}</p>
            </div>
            <div className="form-group">
              <button onClick={() => sendOtp()}>Send OTP</button>
            </div>
          </div>
        </div>
      </>
    );
  }

  function renderOtpPage() {
    return (
      <>
        <div className="signup-form">
          <h3 style={{ marginTop: "35px", marginBottom: "20px" }}>
            {response?.name} - Please enter Otp
          </h3>
          <div className="form">
            <div className="form-group">
              <label style={{ fontSize: "24px" }} htmlFor="phoneOtp">
                {response?.phone}
              </label>
              <input
                type="text"
                name="phoneOtp"
                id="phoneOtp"
                placeholder="enter phone otp"
                value={data?.phoneOtp}
                onChange={(event) => {
                  onValueChange("phoneOtp", event.target.value);
                }}
              />
              <p className="errorMessage">{errors?.phoneOtp}</p>
            </div>
            <div className="form-group">
              <label style={{ fontSize: "24px" }} htmlFor="emailOtp">
                {response?.email}
              </label>
              <input
                type="text"
                name="emailOtp"
                id="emailOtp"
                placeholder="enter email otp"
                value={data?.emailOtp}
                onChange={(event) => {
                  onValueChange("emailOtp", event.target.value);
                }}
              />
              <p className="errorMessage">{errors?.phoneOtp}</p>
            </div>
            <div className="form-group">
              <button onClick={() => verifyOtp()}>Create account</button>
            </div>
          </div>
        </div>
      </>
    );
  }

  function renderPasswordPage() {
    return (
      <>
        <div className="signup-form">
          <h3 style={{ "margin-top": "35px", "margin-bottom": "20px" }}>
            {response?.name} - Please enter password
          </h3>
          <div className="form">
            <div className="form-group">
              <label htmlFor="password">Enter Password</label>
              <input
                type="text"
                name="password"
                id="phonpasswordeOtp"
                placeholder="enter here"
                value={data?.password}
                onChange={(event) => {
                  onValueChange("password", event.target.value);
                }}
              />
              <p className="errorMessage">{errors?.password}</p>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                type="text"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="confirm here"
                value={data?.confirmPassword}
                onChange={(event) => {
                  onValueChange("confirmPassword", event.target.value);
                }}
              />
              <p className="errorMessage">{errors?.confirmPassword}</p>
            </div>
            <div className="form-group">
              <button onClick={() => createAccount()}>Create account</button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {loader ? <Loader /> : ""}
      {status === 1
        ? renderEmailPhone()
        : status === 2
        ? renderOtpPage()
        : status === 3
        ? renderPasswordPage()
        : ""}
    </>
  );
}

export default Signup;
