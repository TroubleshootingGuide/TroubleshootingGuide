import * as React from "react";
import { Component } from "react";
import { Row, Card, NavLink, CardImg, CardTitle } from "reactstrap";
import { Jumbotron, Button } from 'reactstrap';
import TopNav from './TopNav'
import RightNav from './RightNav'
import  Accordion from './Accordion'
import Wizard from './Wizard';
import Footer from './Footer';
class Issues extends React.Component {
  state = {
    apps: [
      "Crash",
      "Hang",
      "Performance",
      "OpenXML",
      "Web Addins",
      "Microsoft Graph",
    ],
  };
  //history = useHistory();

  render() {
    return (
      <div className="App">
        <Jumbotron  style={{padding: "0"}}>
        <h1 style={{color:"White" , background:"#2F4F4F"}} className="display-2">Svādhyāya (Self help)</h1>
        </Jumbotron>
        <div style={{margin:"auto"}}  className="row">
        <div className="col-10">
            <TopNav></TopNav>
              {/* <Tiles></Tiles> */}
              <div id="rowname">
        <Row>
          {this.state.apps.map((app) => (
            <NavLink href="/TroubleshootingGuide#/OfficeTopics/">
              {" "}
              <Card className="_Card">
                <CardTitle>{app}</CardTitle>
              </Card>
            </NavLink>
          ))}
        </Row>
      </div>
        </div>
        
      <div className="col-2"><RightNav></RightNav></div>
      </div> 
      <div>
         {/* <Wizard/> */}
      </div>
      <div><Footer></Footer></div>
    </div>
      
    );
  }
}

export default Issues;
