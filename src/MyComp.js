import React from "react";

export class MyComp extends React.Component {
  static defaultProps = {
    title: "Mr.",
  };

  constructor() {
    super();
    this.state = {
      name: "NiiL",
      title: "Mr.",
      nameIsValid: true,
      titleIsValid: true,
    };
    this.sayHello = this.sayHello.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

    this.texttext = React.createRef();
  }

  render() {
    return (
      <div>
        <p>
          {this.state.title} {this.state.name}'s component {this.texttext.current}
        </p>

        <input
          name="title"
          style={{ borderColor: this.state.titleIsValid ? "green" : "red" }}
          type="text"
          value={this.state.title}
          onChange={this.onInputChange}
        />
        <input
          name="name"
          style={{ borderColor: this.state.nameIsValid ? "green" : "red" }}
          type="text"
          value={this.state.name}
          onChange={this.onInputChange}
        />

        <input ref={this.texttext} type="text" />

        <button onClick={this.sayHello}>Say hello!</button>
      </div>
    );
  }

  onInputChange(e) {
    const valid = e.target.value.length > 2 ? true : false;

    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name + "IsValid"]: valid,
    });
  }
  sayHello(e) {
    this.setState((state, props) => {
      return { name: "Javid" };
    });
  }
}
