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
class Tools extends Component {
  state = {
    isActive: false
  };
  render()
  { 
  return (
    <div className="App">
        <Jumbotron  style={{padding: "0"}}>
        <h1 style={{color:"White" , background:"#2F4F4F"}} className="display-2">Svādhyāya (Self help)</h1>
        </Jumbotron>
        <div style={{margin:"auto"}}  className="row">
        <div className="col-10">
            <TopNav></TopNav>
              {/* <Tiles></Tiles> */}
              <h2>Tools Information</h2>
              <ul>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio temporibus velit vitae ipsum nobis reprehenderit! Fugit expedita enim corporis, dolores doloremque ullam obcaecati velit rerum. Ab cupiditate assumenda ducimus corporis praesentium enim pariatur harum, minima omnis? Ullam ab dolor consequatur!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quasi accusantium molestiae adipisci ex tenetur quis neque alias dolorem beatae similique corporis ipsa aperiam, possimus natus voluptatum modi, cum eos.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellat ipsum odit facere, quidem sed obcaecati quis dolor quas blanditiis consequuntur consectetur reiciendis non nisi aliquid ratione quo maiores. Rerum nulla ex quasi ipsam illo, est sed id nobis repudiandae repellendus minima accusantium eveniet, vel facilis numquam quas voluptas. Unde.</li>
              </ul>
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

export {Tools};