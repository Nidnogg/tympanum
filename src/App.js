import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
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
  }
  render() {
    return (
      <Grid>
        <Button color="#789DAF" audioUrl="D:\localdev\tympanum\src\audio"></Button>
        <Button color="#D08DBE" audioUrl="https://jp4pnq.dm.files.1drv.com/y4mSWJsaDJii2wlqCTS8ttXuBfA76DIgjN1N-1fGCYKLWDiHh-xo-YK1TtNWV6fgVKRsyOhdYa_vzUAu7LDMQtKE-E4qJoPTW2ioyHtQljF7P2k5dRS7Eea8wFFWLEFGHkEtg81Avv0pCjz_AXKheEAOaykSS-0bc_0A7YTRxLTAlPCvKcvLtbQ1FmA-flq4YO0zL3zLXCyMBfA8-wGlyrAAA?authkey=!AP3BY0zrzMtoIxk"></Button>
        <Button color="#7E965A" audioUrl="./public/audio/htom_med.mp3"></Button>
        <Button color="#A24545" audioUrl="./public/audio/htom_med.mp3"></Button>
      </Grid>
    );
  }
} 

class Button extends Component {
  constructor(props) {
    super(props);
    this.audio = new Audio(this.props.audioUrl);
    this.audio.type = 'audio/mp3';
    
    // Initial state
    this.state = { play: false };

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
