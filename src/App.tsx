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
  BrowserRouter as Router,
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
        <Route path="/TroubleshootingGuide" component={Home}  exact/>
        <Route path="/TroubleshootingGuide/home" component={Home}  exact/>
        <Route path="/TroubleshootingGuide/OfficeTopics" component={OfficeTopics} exact />
        <Route path="/TroubleshootingGuide/SharePointTopics" component={OfficeTopics} exact/>
        
        <Route path="/TroubleshootingGuide/Samples" component={Samples} exact />
        <Route path="/TroubleshootingGuide/Suggestions" component={Suggestions} />
        <Route path="/TroubleshootingGuide/Hotfix" component={Hotfix} />
        <Route path="/TroubleshootingGuide/Framework" component={Framework} />
        <Route path="/TroubleshootingGuide/Tools" component={Tools} />
    </Switch>
</main>
  )
}
}



export default App;