import { useState } from "react";
const LeftBox = ({ handleTip, handleBill, bill, people, handlePeople }) => {
  const [tip, setTip] = useState(15);
  const [noOfPeople,setNoOfPeople] = useState(1);
  

  return (
    <div className="left-box">
      {/* Add input for bill */}
      <label for="bill">Bill:</label>
      <br/>
      <input type="number" id="bill" name="bill" />
      {/* Add buttons for % of tip */}
      <div className="percentage-buttons">
        <button onClick={()=>handleTip(5)}>5%</button>
        <button onClick={()=>handleTip(10)}>10%</button>
        <button onClick={()=>handleTip(15)}>15%</button>
        <button onClick={()=>handleTip(25)}>25%</button>
        <button onClick={()=>handleTip(50)}>50%</button>
      <input type="number" placeholder = "Custom" value={tip}
      onChange = {(e)=>{
        handleBill(e.target.value)
      }}
      />
      </div>
      {/* Add input for no.of peoples */}
      <label for="noOfPeople">Number Of People</label>
      <input type="number" id="noOfPeople" value={noOfPeople}
      onChange={(e)=>handlePeople(e.target.value)}
      />
    </div>
  );
};

export default LeftBox;
