import { useState } from "react";
import PropTypes from "prop-types";

function MathActionButton(props) {
  const [value = 0] = useState(props.value);
  const [inp = null] = useState(props.inp);
  const [setValues = null] = useState(props.setValues);

  function changeInput() {
    if (inp.current?.value !== "" && inp.current?.value !== ".") {
      setValues(value);
    }
  }

  return <button onClick={changeInput}>{value}</button>;
}

MathActionButton.propTypes = {
  value: PropTypes.any,
  inp: PropTypes.object,
  setValues: PropTypes.func,
};

export default MathActionButton;
