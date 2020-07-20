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
class Hotfix extends Component {
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
              <h2>Hotfix Information</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos illo molestias obcaecati harum modi, commodi rerum quas, vero omnis sint esse molestiae veritatis? Non quo assumenda vero inventore voluptate consequatur earum dolorem consectetur recusandae, nam magnam amet ipsum harum aspernatur reiciendis doloremque natus rerum asperiores repudiandae maxime adipisci nostrum optio? Suscipit magni molestias possimus delectus cumque dolorum, a quos saepe! Mollitia repudiandae voluptatum, corporis consectetur, saepe ab nisi corrupti nihil sit totam voluptatem temporibus, perferendis nobis! Adipisci cum vitae enim odio, voluptatem cumque laudantium aliquam architecto excepturi accusantium! Autem eaque minus quod voluptatem aut sit sapiente a maiores itaque quisquam ut earum, delectus nobis ab possimus laboriosam vitae? Ab eos voluptas blanditiis. Doloremque in, quisquam perferendis labore ducimus quia cum vitae sint incidunt, provident alias ipsum fuga harum. Eveniet aperiam obcaecati fugiat illo quidem debitis consequatur incidunt est itaque neque minima consectetur vitae voluptatibus perspiciatis corporis ratione, totam dignissimos molestiae impedit doloremque quos aut! Eaque ab dicta vero fugiat explicabo expedita ipsum placeat nisi labore ratione, alias dolor aliquam molestiae ex nesciunt rem hic fuga quod dolorem porro quo minus? Eum et unde voluptatum veniam quo quidem odio mollitia obcaecati nesciunt provident. Sit officiis aperiam excepturi nemo ut eum magni optio, tempora eveniet, impedit fuga veritatis, magnam odit. Architecto placeat nam consequuntur, minima dolor nobis ab sapiente aperiam facilis dicta, molestiae cumque culpa nesciunt, totam nostrum assumenda. Necessitatibus quod voluptate modi saepe fugiat aperiam cum unde a tempore blanditiis consequatur maiores quis, provident sequi est beatae praesentium odit, optio temporibus. At accusantium reiciendis soluta libero itaque magnam qui inventore voluptatum, voluptas sint nam nesciunt voluptate officiis aliquam velit, vitae explicabo id? Magnam iste rerum sequi cum sit quis quae numquam distinctio, quisquam inventore totam, ex assumenda, omnis voluptas vitae nobis dolore officiis nam suscipit! Praesentium tempore odio rem ex.</p>
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

export {Hotfix};