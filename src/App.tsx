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
import {OfficeTopics} from './Office'
import {Samples} from './Samples'
import {Suggestions} from './Suggestions'
import {Hotfix} from './Hotfix'
import {Home} from './Home'
import {Tools} from './Tools'
import {Framework} from './Framework'
import Tiles from './components/Tiles';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  state = {
    isActive: false
  };
  render()
  { const greeting = 'Welcome to React';
  return (
    <main>
    <Switch>
    <Route path="/" component={Home}  exact/>
        <Route path="/home" component={Home}  exact/>
        <Route path="/OfficeTopics" component={OfficeTopics} exact />
        <Route path="/SharePointTopics" component={OfficeTopics} exact/>
        
        <Route path="/Samples" component={Samples} exact />
        <Route path="/Suggestions" component={Suggestions} />
        <Route path="/Hotfix" component={Hotfix} />
        <Route path="/Framework" component={Framework} />
        <Route path="/Tools" component={Tools} />
    </Switch>
</main>
  )
}
}



export default App;