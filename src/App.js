import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Title />
      </div>
    );
  }
}

const Title = styled.h2`
  font-family: Helvetica;
  font-size: 1em;
`;

export default App;
