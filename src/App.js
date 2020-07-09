import React, { Component } from 'react';
import ClickCounter from './components/ClickCounter';
import CounterButton from './components/CounterButton';
import './App.css';
import SetClickInput from './components/SetClickInput';

class App extends Component {
  state = {
    numClicks: 0,
  };

  /*
  buttonClickHandler = (action) => {
    let newClicks = this.state.numClicks;
    console.log(action);
    newClicks = action(newClicks);

    this.setState({ numClicks: newClicks });
  };*/

  inputChangedHandler = (event) => {
    this.setState({ numClicks: event.target.value });
  };

  render() {
    return (
      <div className='App'>
        <CounterButton
          label={'Increment'}
          click={() => {
            let newClicks = this.state.numClicks;
            newClicks++;
            this.setState({ numClicks: newClicks });
          }}
          numClicksIsEven={this.state.numClicks % 2 === 0 ? true : false}
        ></CounterButton>

        <CounterButton
          label={'Decrement'}
          click={() => {
            let newClicks = this.state.numClicks;
            newClicks--;
            this.setState({ numClicks: newClicks });
          }}
          numClicksIsEven={this.state.numClicks % 2 === 0 ? true : false}
        ></CounterButton>

        <SetClickInput
          changed={this.inputChangedHandler}
          numClicks={this.state.numClicks}
        ></SetClickInput>

        <br></br>
        <div style={{ clear: 'left' }}>
          <ClickCounter numClicks={this.state.numClicks}></ClickCounter>
          <ClickCounter numClicks={this.state.numClicks}></ClickCounter>
        </div>
      </div>
    );
  }
}

export default App;
