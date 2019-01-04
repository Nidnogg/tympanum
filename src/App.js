import React, { Component } from 'react';
import './css/App.css';
import styled from 'styled-components';

// for trying out audio Imports
//import playAudio from './controllers.js';


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
  }
  render() {
    return (
      <Grid>
        <Button color="#789DAF" audioUrl="https://firebasestorage.googleapis.com/v0/b/cloudtop-nidnogg.appspot.com/o/audio%2Ftest.mp3?alt=media&token=c0ca5d7b-abcf-43c7-87af-764393e539af"></Button>
        <Button color="#D08DBE" audioUrl="https://firebasestorage.googleapis.com/v0/b/cloudtop-nidnogg.appspot.com/o/audio%2Ftest.mp3?alt=media&token=c0ca5d7b-abcf-43c7-87af-764393e539af"></Button>
        <Button color="#7E965A" audioUrl="./audio/test.mp3"></Button>
        <Button color="#A24545" audioUrl="./audio/test.mp3"></Button>
      </Grid>
    );
  }
} 

class Button extends Component {
  constructor(props) {
    super(props);

    // Audio props
    this.audio = new Audio(this.props.audioUrl);
    
    // Initial state
    this.state = { 
      play: false 
    };

    // Function Binds
    this.playAudio = this.playAudio.bind(this);
  }

  playAudio() {
    console.log(this.props.audioUrl);   
    console.log(`this.audio: ${this.audio}`);
    this.setState({play: !this.state.play});
    this.state.play ? this.audio.play() : this.audio.pause();
  }

  render() {
    return  (
      <StyledButton color={this.props.color} onClick={this.playAudio} />
    );
  }
}

const Grid = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: space-between;
`;

const StyledButton = styled.div`
  background-color: ${props => props.color}
  width: 4.0em;
  height: 4.0em;
  margin: 2.0em;
`;


export default App;
