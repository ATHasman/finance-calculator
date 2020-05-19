/** @format */

import "../Comp/UserForm.css";
import React, { Component } from "react";


// Simple class Component UI Form
// Props may include data [{objects},..] array  - for the form field Inputs and 
// initial values 
// e.g. -  [{name: John Doe},{email: john@example.com},{age: 44},..]
export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <br></br>
        <label>
          Email:
          <input
            name="email"
            type="email"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
