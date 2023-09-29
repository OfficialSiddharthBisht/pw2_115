import React,{useState} from "react";

const RightBox = ({
  tipAmount,
  total,
  people,
  handleBill,
  handleTip,
  handlePeople,
}) => {
  return <div className="right-box">
    {/* Add tip Amount and total here */}
  <h2>Tip Amount/ person ${tipAmount}</h2>
  <h2>Total/ person ${total}</h2>

    {/* Add button to RESET */}
    <button onClick={(e)=>console.log("Reset")}>Reset</button>
  </div>;
};

export default RightBox;
