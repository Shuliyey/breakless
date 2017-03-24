import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
        items: []
    }
  }

  render() {
    const {items} = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to AWS Twitch</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        { items.map(item => <p>{item.id}</p>) }
      </div>
    );
  }

  componentDidMount(){
    var that = this;
    console.log("Component mounted!");
    var apigClient = window.apigClientFactory.newClient();
    var params = {};
    var body = {};
    var additionalParams = {};
    console.log("before call");

    apigClient.featureditemsGet(params, body, additionalParams)
        .then(function(result) {
            console.log("success");
            console.log(result.data);
            that.setState(result.data);
        }).catch(function(error) {
          console.log("error");
          console.error(error);
        });
  }

}

export default App;
