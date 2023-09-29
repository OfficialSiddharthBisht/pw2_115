import LeftBox from "./LeftBox";
import RightBox from "./RightBox";
import React, { useState } from "react";
const BillPage = () => {
  const initialBill = 0;
  const initialPeople = 1;
  const initialTipAmount = 0.00;
  const [bill, setBill] = useState(initialBill);
  const [people, setPeople] = useState(initialPeople);
  const [tipAmount,setTipAmount] = useState(initialTipAmount);
  const [total,setTotal] = useState(0.00);

  const handleBill = (amount) => {
    if(amount >=0){
      setBill(amount);
      calCulateTipAndTotal(amount, tipAmount, people);
    }
  }
  const handleTip = (value) => {
    let percentage = 15;
    percentage = parseFloat(value) || 15;
    if ( percentage > 0 && percentage <= 100) {
      setTipAmount(percentage);
      calCulateTipAndTotal(bill,percentage, people)
    } else {
      setTipAmount(15);
    }
  }


  const handlePeople = (count) => {
    let peopleCount = parseInt(count);
    if (peopleCount > 0) {
      setPeople(peopleCount);
      calCulateTipAndTotal(bill,tipAmount,count)
    } else {
      setPeople(1);
    }
  }
  const calCulateTipAndTotal=(billAmount, tipPercentage, numberOfPeople) =>{
    const tip = (billAmount + tipPercentage) /100;
    const totalAmount = billAmount + tip;
    const totalPerson = totalAmount / numberOfPeople;
    setTipAmount(tip.toFixed(2)*100);
    setTotal(totalPerson.toFixed(2)*100);
  }
  const reset = () =>{
    setBill(initialBill);
    setPeople(initialPeople);
    setTipAmount(initialTipAmount);
    setTotal(0);
  }
  return (
    <div className="bill-box">
      {/* Add LeftBox and RightBox component here */}
      <LeftBox handleTip={handleTip} handleBill={handleBill} bill={bill} people={people} handlePeople={handlePeople} />
      <RightBox tipAmount={tipAmount} total={total} people={people} handleBill={handleBill} handleTip={handleTip} handlePeople={handlePeople} reset={reset}/>
    </div>
  );
};

export default BillPage;
