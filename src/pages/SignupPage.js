import React from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import GoogleSignupButton from "../components/GoogleSignupButton";
import "../styles/signup.scss";

const SignupPage = () => {
  return (
    <>
      <div className="main-container">
        <div className="signup-container">
          <div className="signup-header">
            <div className="signup-header-title">
              <h1>Sign up</h1>
              <GoogleSignupButton />
            </div>
            <hr className="line-1" />
          </div>
          <div className="signup-form">
            <div className="signup-input-field">
              <form>
                <div className="signup-name">
                  <label>Name</label>
                  <input type="name" placeholder="Enter name" />
                </div>
                <div className="signup-email">
                  <label>Email</label>
                  <input type="email" placeholder="example@mail.com" />
                </div>
                <div className="signup-password">
                  <label>Password</label>
                  <div className="signup-field-password">
                    <input type="password" placeholder="***********" />
                    <span>
                      <AiOutlineEyeInvisible size={24} />
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <div className="signup-button">
              <button type="button">Sign up</button>
            </div>
          </div>
          <div className="signup-footer">
            <div className="login-instead">
              <hr className="line-2" />
              <div className="signup-footer-text">
                <p>Already have an account?</p>
                <a href="/#">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
