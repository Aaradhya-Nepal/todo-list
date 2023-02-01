import React from "react";
import { useState } from "react";

const List = (props) => {
  const [strike, setStrike] = useState(false);
  function handleClick() {
    setStrike(!strike);
  }
  // console.log(props);
  return (
    <>
      <li style={{ textDecoration: strike ? "line-through" : null }}>
        {props.text}
      </li>
      <button onClick={handleClick}>Complete</button>
    </>
  );
};

export default List;
