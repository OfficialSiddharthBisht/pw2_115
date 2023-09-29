import { useState } from "react";
const LeftBox = ({ handleTip, handleBill, bill, people, handlePeople }) => {
  const [tipPercentage, setTipPercentage] = useState(15);
  const [noOfPeople,setNoOfPeople] = useState(1);
  
  const handlePercentageChange = (value) =>{
    let percentage = 15;
    percentage = parseFloat(value);
    if(!NaN(percentage) && percentage > 0 && percentage <=100){
      setTipPercentage(percentage);
    }else{
      setTipPercentage(15)
    }
  }
  const handleNoOfPeopleChange = (value) =>{
    let peopleCount = parseInt(value);
    if(!NaN(peopleCount) && peopleCount > 0){
      setNoOfPeople(peopleCount);
    }else{
      setNoOfPeople(1);
    }
  }
  return (
    <div className="left-box">
      {/* Add input for bill */}
      <label for="bill">Bill:</label>
      <br/>
      <input type="number" id="bill" name="bill" />
      {/* Add buttons for % of tip */}
      <div className="percentage-buttons">
        <button onClick={()=>handlePercentageChange(5)}>5%</button>
        <button onClick={()=>handlePercentageChange(10)}>10%</button>
        <button onClick={()=>handlePercentageChange(15)}>15%</button>
        <button onClick={()=>handlePercentageChange(25)}>25%</button>
        <button onClick={()=>handlePercentageChange(50)}>50%</button>
      <input type="number" placeholder = "Custom" value={tipPercentage}
      onChange = {(e)=>{
        handlePercentageChange(e.target.value)
      }}
      />
      </div>
      {/* Add input for no.of peoples */}
      <label for="noOfPeople">Number Of People</label>
      <input type="number" id="noOfPeople" value={noOfPeople}
      onChange={(e)=>handleNoOfPeopleChange(e.target.value)}
      />
    </div>
  );
};

export default LeftBox;
