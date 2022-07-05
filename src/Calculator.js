import React from "react";
import { CalculatorButton } from "./CalculatorButton";

export class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          id="calcOutput"
          name="calcOutput"
          ref={this.myRef}
          readOnly
        ></input>
        <tbody>
          {
            Array.from(Array(3), (e, i) => {
              return(
              <tr>
                {
                  Array.from(Array(3), (e, j) => {
                    return (
                      <td>
                        <CalculatorButton
                          value={7 - i * 3 + j}
                          inp={this.myRef}
                        />
                      </td>
                    );
                  })
                }
              </tr>
              )
            })
          }
          <tr>
            <td><CalculatorButton value={0} inp={this.myRef} /></td>
            <td><CalculatorButton value={"."} inp={this.myRef} /></td>
          </tr>
        </tbody>
      </div>
    );
  }
}
