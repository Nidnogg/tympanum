import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { playAudio } from './controllers.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>Learn Finger Drumming</Title>
        <ButtonGrid></ButtonGrid>
      </div>
    );
  }
}

const Title = styled.h2`
  display: flex;
  padding: 1.5vw 0 0 1.5vw ;
  font-family: Helvetica;
  font-size: 1em;
`;

class ButtonGrid extends Component {
  constructor() {
    super();
    this.playAudio = this.playAudio.bind(this);
  }
  playAudio()  {
    alert('clicked button');
  }
  render() {
    return (
      <Grid>
        <Button onClick={this.playAudio} color="#789DAF"></Button>
        <Button color="#D08DBE"></Button>
        <Button color="#7E965A"></Button>
        <Button color="#A24545"></Button>
      </Grid>
    );
  }
} 
/*
class Button extends Component {
  constructor() {
    super();
    this.playAudio = this.playAudio.bind(this);
  }

  playAudio() {
    alert('rola');
  }
}
*/
const Button = styled.div`
  background-color: ${props => props.color}
  width: 4.0em;
  height: 4.0em;
  margin: 2.0em;
`;

const Grid = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: space-between;
`;

export default App;
