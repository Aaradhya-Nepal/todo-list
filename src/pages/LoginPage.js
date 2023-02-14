import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import "../styles/login.scss";

const LoginPage = () => {
  return (
    <>
      <div className="login-screen">
        <div className="login-form-footer">
          <div className="login">
            <div className="header">
              <h1 className="login-text">Log in</h1>
              <br />
              <button type="button" className="login-with-google">
                <div className="icon-text">
                  <FcGoogle size={20} />
                  <span> &nbsp; Log in with Google</span>
                </div>
              </button>
            </div>
            <br />
            <hr className="line-1" />
          </div>
          <div className="form">
            <div className="input-field">
              <form>
                <div className="email">
                  <label htmlFor="Email" className="email-label">
                    Email
                  </label>
                  <br />
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="email-input"
                  />
                </div>
                <br />
                <div className="password">
                  <label htmlFor="Password" className="password-label">
                    Password
                  </label>
                  <br />
                  <div className="input-field-password">
                    <input
                      type="password"
                      placeholder="***********"
                      className="password-input"
                    />
                    <span className="icon">
                      <AiOutlineEyeInvisible size={24}/>
                    </span>
                  </div>
                </div>
                <br />
                <div className="checkbox">
                  <input type="checkbox" className="check" />
                  <label htmlFor="checkbox" className="checkbox-text">
                    Remember me
                  </label>
                </div>
              </form>
            </div>
            <div className="login-button">
              <button type="button" className="button">
                Log in
              </button>
              <br />
              <a href="/#" className="forgot-password">
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="footer">
            <div className="signup-instead">
              <hr className="line-2" />
              <div className="text">
                <p className="question">Don't have an account?</p>
                <a href="/#" className="sign-up">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
