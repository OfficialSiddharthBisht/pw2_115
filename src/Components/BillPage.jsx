import LeftBox from "./LeftBox";
import RightBox from "./RightBox";
import React, { useState } from "react";
const BillPage = () => {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [tipAmount,setTipAmount] = useState(0.00);
  const [total,setTotal] = useState(0.00);
  const handleTip = (value) => {
    let percentage = 15;
    percentage = parseFloat(value);
    if (!NaN(percentage) && percentage > 0 && percentage <= 100) {
      setTipAmount(percentage);
    } else {
      setTipAmount(15);
    }
  }

  const handleBill = (amount, tip) => {

  }
  const handlePeople = (value) => {
    let peopleCount = parseInt(value);
    if (!NaN(peopleCount) && peopleCount > 0) {
      setPeople(peopleCount);
    } else {
      setPeople(1);
    }
  }
  return (
    <div className="bill-box">
      {/* Add LeftBox and RightBox component here */}
      <LeftBox handleTip={handleTip} handleBill={handleBill} bill={bill} people={people} handlePeople={handlePeople} />
      <RightBox tipAmount={tipAmount} total={total} people={people} handleBill={handleBill} handleTip={handleTip} handlePeople={handlePeople}/>
    </div>
  );
};

export default BillPage;
