import React from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import "../styles/login.scss";
import GoogleLoginButton from "../components/GoogleLoginButton";

const LoginPage = () => {
  return (
    <>
      <div className="main-container">
        <div className="login-container">
          <div className="login-header">
            <div className="login-header-title">
              <h1>Log in</h1>
              <GoogleLoginButton />
            </div>
            <hr className="line-1" />
          </div>
          <div className="login-form">
            <div className="login-input-field">
              <form>
                <div className="login-email">
                  <label className="email-label">Email</label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="email-input"
                  />
                </div>
                <div className="login-password">
                  <label>Password</label>
                  <div className="login-field-password">
                    <input type="password" placeholder="***********" />
                    <span>
                      <AiOutlineEyeInvisible size={24} />
                    </span>
                  </div>
                </div>
                <div className="login-checkbox">
                  <input type="checkbox" />
                  <label>Remember me</label>
                </div>
              </form>
            </div>
            <div className="login-button">
              <button type="button">Log in</button>
              <a href="/#">Forgot Password?</a>
            </div>
          </div>
          <div className="login-footer">
            <hr className="line-2" />
            <div className="login-footer-text">
              <div className="footer-text">
                <p>Don't have an account?</p>
                <a href="/#">Sign up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
