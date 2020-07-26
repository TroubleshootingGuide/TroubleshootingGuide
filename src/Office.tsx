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
import { act } from '@testing-library/react';
class OfficeTopics extends Component {
  
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
            <h2>Office Performance Issues</h2>
            <div className="IssueLists">
            <ul>
           <li>
            <p  className="primarytext">VBA related performance issues</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit aut provident at nisi accusantium sunt officiis nesciunt inventore dignissimos, assumenda cumque. Consequuntur exercitationem iusto numquam autem labore ut explicabo voluptatibus, qui quasi ipsum! Neque, amet ipsa, unde provident assumenda corrupti rerum sequi similique fuga autem veniam eaque qui iure.</p>
            <Wizard/>
           </li>
           <li>
            <p  className="primarytext">VSTO related performance issues</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit aut provident at nisi accusantium sunt officiis nesciunt inventore dignissimos, assumenda cumque. Consequuntur exercitationem iusto numquam autem labore ut explicabo voluptatibus, qui quasi ipsum! Neque, amet ipsa, unde provident assumenda corrupti rerum sequi similique fuga autem veniam eaque qui iure.</p>
            <Wizard/>
           </li>
           {/* <li>
           <p className="primarytext">Addin load issues</p>
           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, explicabo!</p>
            <Wizard/>
           </li>
           
           <li>
           <p className="primarytext">Open XML SDK</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, explicabo!</p>
           </li>
           <li>
           <p className="primarytext">Office Web Addins</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, explicabo!</p>
           </li> */}
         </ul>
         </div>
              {/* <Tiles></Tiles> */}
        </div>
      <div className="col-2"><RightNav></RightNav></div>
      </div> 
      
      <div>
         
         {/* <Accordion/> */}
       
      </div>
      <div><Footer></Footer></div>
    </div>
  )
  }

  click(){
    alert();
  }
}

export {OfficeTopics};