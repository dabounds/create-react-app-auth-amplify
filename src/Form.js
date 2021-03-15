import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { alias } = this.state;
    await axios.post(
      'https://c97qxqcyj5.execute-api.us-west-2.amazonaws.com/devw/account',
      { key1: `${alias}` }
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Alias:</label>
          <input
            type="text"
            name="alias"
            onChange={this.handleChange}
            value={this.state.alias}
          />

          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}