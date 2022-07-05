import React from "react";
import PropTypes from "prop-types";

export class CalculatorButton extends React.Component {
  static defaultProps = {
    value: 0,
    inp: null
  };

  static propTypes = {
    value: PropTypes.any,
    inp: PropTypes.object
  };

  render() {
    return (
      <button
        onClick={() => {
          this.props.inp.current.value += this.props.value;
        }}
      >
        {this.props.value}
      </button>
    );
  }
}
