import React from "react";
import { FcGoogle } from "react-icons/fc";
import "../styles/googleLogin.scss";

const GoogleLoginButton = () => {
  return (
    <>
      <div className="login-with-google">
        <button type="button">
          <div className="icon-text">
            <FcGoogle size={20} />
            <span> &nbsp; Log in with Google</span>
          </div>
        </button>
      </div>
    </>
  );
};

export default GoogleLoginButton;
