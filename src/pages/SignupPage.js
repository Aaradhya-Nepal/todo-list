import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import "../styles/signup.scss";

const SignupPage = () => {
  return (
    <>
      <div className="signup-screen">
        <div className="signup-form-footer">
          <div className="signup">
            <div className="header">
              <h1 className="signup-text">Sign up</h1>
              <br />
              <button type="button" className="signup-with-google">
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
                <div className="name">
                  <label htmlFor="name" className="name-label">
                    Name
                  </label>
                  <br />
                  <input
                    type="name"
                    placeholder="Enter name"
                    className="name-input"
                  />
                </div>
                <br />
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
                  <div className="signup-field-password">
                    <input
                      type="password"
                      placeholder="***********"
                      className="password-input"
                    />
                    <span className="icon">
                      <AiOutlineEyeInvisible size={24} />
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <div className="signup-button">
              <button type="button" className="button">
                Sign up
              </button>
            </div>
          </div>
          <div className="footer">
            <div className="login-instead">
              <hr className="line-2" />
              <div className="text">
                <p className="question">Already have an account?</p>
                <a href="/#" className="log-in">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
