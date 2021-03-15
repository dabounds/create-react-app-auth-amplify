import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import { API } from 'aws-amplify';
import Form from './Form.js';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div>
        <h1>Amazon Alias (without @):</h1>
        <Form />
      </div>
    );
  }
}

export default withAuthenticator(App, true);
