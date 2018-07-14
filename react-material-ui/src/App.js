import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import Manage from './pages/Manage';
import Subscriptions from './pages/Subscriptions';
import logo from './logo.svg';
import DeleteBtn from '../components/DeleteBtn';
import Grid from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import NavBar from '../components/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PseudoCoin</h1>
        </header>
        <p className="App-intro">
          Welcome to PseudoCoin! Click on the "Current Amount" or "Investments" section, or click on the side navigation bar for "Subscriptions" or "Manage".
         </p>
        {/* <NavBar>
          <div className="Sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a href="index.html">Dashboard</a>
            <a href="#">User Profile</a>
            <a href="#">Subscriptions</a>
            <a href="main.html">Manage</a>
          </div>
          <Navbar /> */}
          {/* <Container>
          <Container /> */}
       </div>
    )
  }
 }


export default App;
