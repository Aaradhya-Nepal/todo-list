import React from "react";
import { IoClose } from "react-icons/io5";
import "../styles/closeIcon.scss";

const CloseIcon = () => {
  return (
    <>
      <div className="close-icon">
        <IoClose size={40} />
      </div>
    </>
  );
};

export default CloseIcon;
