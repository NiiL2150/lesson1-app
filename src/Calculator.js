import React, { useState, useRef } from "react";
import CalculatorButton from "./CalculatorButton";
import MathActionButton from "./MathActionButton";

export default function Calculator(props) {
  const currentNumber = useRef();
  const operatorRef = useRef();
  const numberRef = useRef();
  const [currentOperator, setCurrentOperator] = useState("");
  const [lastNumber, setLastNumber] = useState(0);

  const operators = ["+", "-", "*", "/", "//", "%"];

  function setValues(curOper) {
    setLastNumber(parseFloat(currentNumber.current.value));
    setCurrentOperator(curOper);
    operatorRef.current.value = curOper;
    numberRef.current.value = parseFloat(currentNumber.current.value);
    currentNumber.current.value = "";
  }

  function equalOperation() {
    let result = 0;
    const curNumber = parseFloat(currentNumber.current.value);
    const lastNum = parseFloat(numberRef.current.value);
    switch (operatorRef.current.value) {
      case "+":
        result = lastNum + curNumber;
        break;
      case "-":
        result = lastNum - curNumber;
        break;
      case "*":
        result = lastNum * curNumber;
        break;
      case "/":
        result = lastNum / curNumber;
        break;
      case "//":
        result = Math.floor(lastNum / curNumber);
        break;
      case "%":
        result = lastNum % curNumber;
        break;
      default:
        result = 0;
    }
    currentNumber.current.value = result;
    setValues("");
  }

  function checkIfZero() {
    if (currentNumber.current?.value === "0") {
      return true;
    }
    return false;
  }

  function hasPoint() {
    if (currentNumber.current?.value.includes(".")) {
      return true;
    }
    return false;
  }

  function addDigit(digit) {
    if (checkIfZero()) {
      currentNumber.current.value = digit;
    } else {
      currentNumber.current.value += digit;
    }
  }

  function removeLast() {
    if (currentNumber.current?.value.length > 0) {
      currentNumber.current.value = currentNumber.current.value.slice(0, -1);
    }
  }

  function softReset() {
    currentNumber.current.value = "";
  }

  function hardReset() {
    currentNumber.current.value = "";
    operatorRef.current.value = "";
    numberRef.current.value = 0;
    setLastNumber(0);
    setCurrentOperator("");
  }

  return (
    <div>
      <h3>
        {lastNumber} {currentOperator}
      </h3>

      <input
        type="text"
        id="calcOutput"
        name="calcOutput"
        data-testid="calcOutput"
        ref={currentNumber}
        readOnly
      ></input>
      <input type="text" ref={operatorRef} readOnly hidden></input>
      <input type="text" ref={numberRef} readOnly hidden></input>
      <button onClick={removeLast}>DEL</button>
      <button onClick={softReset}>CE</button>
      <button onClick={hardReset}>C</button>
      <tbody>
        {Array.from(Array(3), (e, i) => {
          return (
            <tr>
              {Array.from(Array(3), (e, j) => {
                return (
                  <td>
                    <CalculatorButton
                      value={7 - i * 3 + j}
                      inp={currentNumber}
                      addDigit={() => addDigit}
                    />
                  </td>
                );
              })}
            </tr>
          );
        })}
        <tr>
          <td>
            <CalculatorButton
              value={0}
              inp={currentNumber}
              check={() => checkIfZero}
              addDigit={() => addDigit}
            />
          </td>
          <td>
            <CalculatorButton
              value={"."}
              inp={currentNumber}
              check={() => hasPoint}
              addDigit={() => addDigit}
            />
          </td>
        </tr>
        <tr>
          {Array.from(operators, (e, i) => {
            return (
              <td>
                <MathActionButton
                  value={e}
                  inp={currentNumber}
                  setValues={() => setValues}
                />
              </td>
            );
          })}
          <td>
            <MathActionButton
              value={"="}
              inp={currentNumber}
              setValues={() => equalOperation}
            />
          </td>
        </tr>
      </tbody>
    </div>
  );
}
