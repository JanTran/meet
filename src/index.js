import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as atatus from 'atatus-spa';
atatus.config('b69eac7951bf4d22b1e22fd3ad5196ab').install();


class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Component {
    constructor(props) {
      super(props);
      this.color = 'blue';
    }
  
    getStyle = () => {
      return {
        color: this.color,
      };
    }
  
    render() {
      return (
        <div className="Alert">
          <p style={this.getStyle()}>{this.props.text}</p>
        </div>
      );
    }
  }
  
  class WarningAlert extends Component {
    constructor(props) {
      super(props);
      this.color = 'orange';
    }
  
    getStyle = () => {
      return {
        color: this.color,
      };
    }
  
    render() {
      return (
        <div className="Alert">
          <p style={this.getStyle()}>{this.props.text}</p>
        </div>
      );
    }
  }
  
  class ErrorAlert extends Component {
    constructor(props) {
      super(props);
      this.color = 'red';
    }
  
    getStyle = () => {
      return {
        color: this.color,
      };
    }
  
    render() {
      return (
        <div className="Alert">
          <p style={this.getStyle()}>{this.props.text}</p>
        </div>
      );
    }
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

atatus.notify(new Error('Test Atatus Setup'));