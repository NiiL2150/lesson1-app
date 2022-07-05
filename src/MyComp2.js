import React from "react";

export class MyComp2 extends React.Component {
  constructor() {
    super();
    this.state = {
      username: { value: "NiiL2150", valid: true },
      email: { value: "nail.shamsudinov@gmail.com", valid: true },
      phoneNumber: { value: "+994501234567", valid: true },
      password: { value: "", valid: false },
      confirmPassword: { value: "", valid: false },
    };
    this.sayHello = this.sayHello.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
  }

  render() {
    return (
      <form>
        <label>Username</label>
        <input
          type="text"
          name="username"
          style={{
            borderColor: this.state.username.valid ? "green" : "red",
          }}
          value={this.state.username.value}
          onChange={this.onInputChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          style={{
            borderColor: this.state.email.valid ? "green" : "red",
          }}
          value={this.state.email.value}
          onChange={this.onInputChange}
        />
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          style={{
            borderColor: this.state.phoneNumber.valid ? "green" : "red",
          }}
          value={this.state.phoneNumber.value}
          onChange={this.onNumberChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          style={{
            borderColor: this.state.password.valid ? "green" : "red",
          }}
          value={this.state.password.value}
          onChange={this.onInputChange}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          style={{
            borderColor: this.state.confirmPassword.valid ? "green" : "red",
          }}
          value={this.state.confirmPassword.value}
          onChange={this.onInputChange}
        />
        <button onClick={this.sayHello}>Submit</button>
      </form>
    );
  }

  onInputChange(e){
    if(e.target.type === "text"){
      this.onTextChange(e);
    }
    else if(e.target.type === "number"){
      this.onNumberChange(e);
    }
    else if(e.target.type === "email"){
      this.onMailChange(e);
    }
    else if(e.target.type === "password"){
      this.onPassChange(e);
    }
  }

  onTextChange(e) {
    const valid = e.target.value.length > 6 ? true : false;
    this.setState({
      [e.target.name]: { value: e.target.value, valid: valid },
    });
  }
  onNumberChange(e) {
    const valid = e.target.value.match(/^\+?[0-9]{10,15}$/) ? true : false;
    this.setState({
      [e.target.name]: { value: e.target.value, valid: valid },
    });
  }
  onMailChange(e) {
    const valid = e.target.value.match(
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
      ? true
      : false;
    this.setState({
      [e.target.name]: { value: e.target.value, valid: valid },
    });
  }
  onPassChange(e){
    const valid1 = e.target.value.length > 6 ? true : false;
    let valid2 = false;
    if(e.target.name === "password"){
      valid2 = e.target.value === this.state.confirmPassword.value ? true : false;
    }
    else{
      valid2 = e.target.value === this.state.password.value ? true : false;
    }
    const valid = valid1 && valid2;
    console.log(this.state);
    this.setState({
      [e.target.name]: { value: e.target.value },
    });
    this.setState((prev)=>({
      password: { value: prev.password.value, valid: valid },
      confirmPassword: { value: prev.confirmPassword.value, valid: valid },
    }));
    console.log(this.state);
  }
  sayHello(e) {
    e.preventDefault();
    if (
      this.state.username.valid &&
      this.state.email.valid &&
      this.state.phoneNumber.valid &&
      this.state.password.valid &&
      this.state.confirmPassword.valid
    ) {
      alert(`Hello ${this.state.username.value}`);
    }
  }
}
