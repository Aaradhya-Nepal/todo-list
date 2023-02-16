import React from "react";
import { FcGoogle } from "react-icons/fc";
import "../styles/googleSignup.scss";

const GoogleSignupButton = () => {
  return (
    <>
      <div className="signup-with-google">
        <button type="button">
          <div className="icon-text">
            <FcGoogle size={20} />
            <span> &nbsp; Sign up with Google</span>
          </div>
        </button>
      </div>
    </>
  );
};

export default GoogleSignupButton;
