import React from 'react';
import logo from './logo.svg';
import { connect } from "react-redux";
import {startAction} from "./actions/startAction";
import {stopAction} from "./actions/stopAction";

import './App.css';

class App extends React.Component {
  handle = () => {
    console.log('called')
    this.props.rotating ? this.props.stopAction() : this.props.startAction()
  }
  render(){
  console.log(this.props)

  return (
    <div className="App">
      <header className="App-header">
      <div onClick={this.handle}><img src={logo} className={"App-logo" + (this.props.rotating ? "":" App-logo-paused")} alt="logo" /> </div>
        <p>
          Sample App by Alok<br />Click on the Image to start/stop rotate action
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}
const mapStateToProps = state => ({  ...state});
const mapDispatchToProps = dispatch => (
  {
    startAction: () => dispatch(startAction),
    stopAction: () => dispatch(stopAction)
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(App);
