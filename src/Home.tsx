import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Jumbotron, Button } from 'reactstrap';
import TopNav from './components/TopNav'
import RightNav from './components/RightNav'
import  Accordion from './components/Accordion'
import Wizard from './components/Wizard';
import Footer from './components/Footer';
import { Hidden } from '@material-ui/core';
import Tiles from './components/Tiles';
class Home extends Component {
  state = {
    isActive: false
  };
  render()
  { 
  return (
    <div className="App">
        <Jumbotron  style={{padding: "0"}}>
        <h1 style={{ color:"White" , background:"#2F4F4F"}} className="display-3">Svādhyāya</h1>
        </Jumbotron>
        <div style={{margin:"auto"}}  className="row">
        <div className="col-10">
            <TopNav></TopNav>
              <Tiles></Tiles>
        </div>
      <div className="col-2"><RightNav></RightNav></div>
      </div> 
      <div>
         {/* <Wizard/> */}
      </div>
      <div><Footer></Footer></div>
    </div>
  )
  }
}

export {Home};