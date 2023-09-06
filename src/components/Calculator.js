import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./calculator.css";

const Calculator = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [res, setRes] = useState(0);

  function handleValue(operator) {
    if (operator === "plus") {
      setRes(parseInt(input1) + parseInt(input2));
    } else if (operator === "minus") {
      setRes(parseInt(input1) - parseInt(input2));
    } else if (operator === "mul") {
      setRes(parseInt(input1) * parseInt(input2));
    } else if (operator === "div") {
      setRes(parseInt(input1) / parseInt(input2));
    } else {
      console.log("Unknown operator");
      setRes(0); // Reset the result to 0 when an unknown operator is encountered.
    }
  }

  return (
    <div>
      <h1 className="white-text">Calculator</h1>
      <div className="input">
        <input
          type="number"
          name="itemInput"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <input
          type="number"
          name="itemInput"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>
      <div>
        <button
          className="button btn btn-lg custom-button"
          onClick={() => handleValue("plus")}
        >
          <i className="bi bi-plus-square"></i>
        </button>
        <button
          className="button btn btn-lg custom-button"
          onClick={() => handleValue("minus")}
        >
          <i className="bi bi-dash-square"></i>
        </button>
        <button
          className="button btn btn-lg custom-button"
          onClick={() => handleValue("mul")}
        >
          <i className="bi bi-x-square"></i>
        </button>
        <button
          className="button btn btn-lg custom-button"
          onClick={() => handleValue("div")}
        >
          <i className="bi bi-slash-square"></i>
        </button>
        <span style={{ color: "white", fontSize: "50px" }}>Result: {res}</span>
      </div>
    </div>
  );
};

export default Calculator;
