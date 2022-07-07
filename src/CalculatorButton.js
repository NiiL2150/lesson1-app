import { useState } from "react";
import PropTypes from "prop-types";

function CalculatorButton(props) {
  const [value = 0] = useState(props.value);
  const [inp = null] = useState(props.inp);
  const [addDigit = null] = useState(props.addDigit);
  const [check = null] = useState(props.check);

  function changeInput(){
    if(check!=null){
      if(check(inp.current?.value)){
        return;
      }
    }
    addDigit(value);
  }

  return (
    <button onClick={changeInput}>{value}</button>
  );
}

CalculatorButton.propTypes = {
  value: PropTypes.any,
  inp: PropTypes.object,
  check: PropTypes.any,
  addDigit: PropTypes.func,
};

export default CalculatorButton;
