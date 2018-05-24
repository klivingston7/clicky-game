import React, { Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <CardContainer/>
      </div>
    );
  }
}

export default App;
