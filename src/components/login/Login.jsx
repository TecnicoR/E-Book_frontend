import React from "react";
import "./login.css";

function Login() {
  document.title = "Login";
  return (
    <>
      <div className="login-form">
        <h3>
          Welcome back ! <br /> login here
        </h3>
        <form action="">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              autoFocus
              autoComplete="off"
              placeholder="example@website.com"
              id="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              autoComplete="off"
              placeholder="enter password"
            />
          </div>
          <div className="form-group">
            <button>Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
