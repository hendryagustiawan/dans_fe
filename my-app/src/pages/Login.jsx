import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

export default function Login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {};

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <section className="mt-5">
      <div className="container shadow rounded" style={{ backgroundColor: "#ffffff" }}>
        <div className="row d-flex align-items-center justify-content-evenly">
          <div className="col-7 px-0">
            <img src="https://images.unsplash.com/photo-1433854304641-67729357fe18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=730&q=80" className="img-fluid rounded" />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 pt-4 ">
            <div className="col-10">
              <h2 className="fw-bold">Hello Again!</h2>
              <h4 className="fw-semibold">We were missing you</h4>
              <hr style={{ size: "500px" }} />
            </div>
            <form onSubmit={handleLogin}>
              <div className="col-md-10 mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">
                  Email
                </label>
                <input type="email" className="form-control shadow-sm" placeholder="Enter your email" id="exampleInputEmail1" aria-describedby="emailHelp" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} />
              </div>
              <div className="col-md-10 mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">
                  Password
                </label>
                <input type="password" className="form-control shadow-sm" placeholder="Enter your password" id="exampleInputPassword1" value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} />
              </div>
              <div className="col-md-10">
                <button type="submit" className="btn btn-primary fw-semibold form-control shadow-sm rounded-pill">
                  Login
                </button>
              </div>
            </form>
            <div className="col-md-10">
              <p className="text-center fw-semibold mt-3 ">or sign up with</p>

              <GoogleOAuthProvider clientId="354700210553-c99s7f0s06g80407vpsems2mlb94cad0.apps.googleusercontent.com">
                <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
              </GoogleOAuthProvider>

              <div className="mt-2 mb-4">
                <p className="fw-semibold">
                  Don't have an account?
                  <Link to={"/register"} className="ps-2 text-decoration-none fw-semibold">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
