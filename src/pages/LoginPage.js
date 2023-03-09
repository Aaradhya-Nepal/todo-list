import React from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import "../styles/login.scss";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="login-main-container">
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
                  <label>Email</label>
                  <input type="email" placeholder="example@mail.com" />
                </div>
                <div className="login-password">
                  <label>Password</label>
                  <div className="login-password-field">
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
              <button type="button" onClick={() => navigate("/")}>
                Log in
              </button>
              <a href="/#">Forgot Password?</a>
            </div>
          </div>
          <div className="login-footer">
            <div className="signup-instead">
              <hr className="line-2" />
              <div className="login-footer-text">
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
