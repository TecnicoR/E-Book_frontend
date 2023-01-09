import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { confirmAccount, createUser, getVerification } from '../../services/UserService';
import "./signup.css";
function Signup() {

const [data, setData] = useState({});
const [status, setStatus] = useState(2);
const [response, setResponse] = useState({"phone "  : "7751071991"});
// {"name" : "Rabi", "phone" : "7751071991", "email" : "rabinarayanpatra1999@gmail.com"}

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


  function sendOtp() {
    // console.log("data ", data);
    createUser(data)
      .then((res) => {
        // alert("Successfully created the user", res?.id);
        setResponse(res);
        setStatus(2);
        setData({});
        toast.success("Please enter OTP sent to your email and phone");
      })
      .catch((err) => {
        // console.log(err);
        // alert("Error occured:", err?.message);
        toast.error(err?.response?.data?.message);
      });
  }

  function verifyOtp() {
    // console.log("data ", data);
    getVerification(response?.id, data)
      .then((res) => {
        // alert("Successfully created the user", res?.id);
        setResponse(res);
        setStatus(3);
        setData({});
        toast.success("Verified Please enter password");
      })
      .catch((err) => {
        console.log(err)
        // alert("Error occured:", err?.message);
        toast.error(err?.response?.data?.message);
      });
  }

  function createAccount(){
     // console.log("data ", data);
     confirmAccount(response?.id, data)
     .then((res) => {
       // alert("Successfully created the user", res?.id);
       setResponse(res);
       setStatus(4);
       setData({});
       toast.success("Success, Now you can order");
     })
     .catch((err) => {
       console.log(err)
       // alert("Error occured:", err?.message);
       toast.error(err?.response?.data?.message);
     });
  }
  function renderEmailPhone(){
    return (
        <>
          <div className="signup-form">
            <h3 style={{"margin-top": "35px", "margin-bottom": "20px"}}>Hi lets get started !</h3>
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
              </div>
             
              <div className="form-group">
                <label htmlFor="phoneNumber">Contact Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
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
                <button onClick={() => sendOtp()}>Send OTP</button>
              </div>
            </div>
          </div>
        </>
      )
  }

  function renderOtpPage(){
    return (
        <>
          <div className="signup-form">
            <h3 style={{"margin-top": "35px", "margin-bottom": "20px"}}>{response?.name} - Please enter Otp</h3>
            <div className="form">
              <div className="form-group">
                <label style={{"font-size" : "24px"}} htmlFor="phoneOtp">{response?.phone}</label>
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
              </div>
              <div className="form-group">
                <label style={{"font-size" : "24px"}}  htmlFor="emailOtp">{response?.phone}</label>
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
              </div>
              <div className="form-group">
                <button onClick={() => verifyOtp()}>Create account</button>
              </div>
            </div>
          </div>
        </>
      )
  }

  function renderPasswordPage(){
    return (
        <>
          <div className="signup-form">
            <h3 style={{"margin-top": "35px", "margin-bottom": "20px"}}>{response?.name} - Please enter password</h3>
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
                    onValueChange("emailconfirmPasswordOtp", event.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <button onClick={() => createAccount()}>Create account</button>
              </div>
            </div>
          </div>
        </>
      )
  }
  return (
    <>
      {status === 1 ? renderEmailPhone() : status === 2 ? renderOtpPage() : status === 3 ? renderPasswordPage() : ""}
    </>
  )
}

export default Signup