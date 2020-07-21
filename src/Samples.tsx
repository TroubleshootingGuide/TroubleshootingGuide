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
class Samples extends Component {
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
              <h2>Samples</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, placeat. Quas vel, tempore nostrum accusamus molestiae consequatur eius unde quia, voluptates quo voluptatum exercitationem, deleniti temporibus explicabo laboriosam labore mollitia voluptatibus id? Soluta et sint deserunt iusto in facilis voluptatum ea? Perspiciatis, voluptatibus voluptas! Illo eius id blanditiis neque ab!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit voluptatem harum repellat! Autem facilis in voluptas repudiandae tempore mollitia sint officiis temporibus illum veritatis! Facilis aperiam possimus voluptate modi totam? Tempora cupiditate minus perspiciatis sequi, reprehenderit nobis eius enim. Quod eum, rem, nostrum at sapiente adipisci modi voluptate quam culpa tempore, nulla quidem maiores natus excepturi nam. Sed eaque nostrum voluptatum architecto eius odio. Nesciunt, mollitia. Nulla unde perferendis accusantium modi eveniet nesciunt natus. Fuga dolore fugit velit in possimus quam, obcaecati saepe quos consectetur ad accusantium repudiandae officiis, recusandae voluptatem reprehenderit doloremque numquam porro alias. Repellendus omnis at distinctio minus beatae cupiditate aperiam provident dolorum tempora quia quaerat et iste nostrum a earum ducimus labore, officiis, nobis assumenda amet. Id ipsam vero velit dolores repudiandae laborum, impedit fugit necessitatibus deleniti optio dolorum assumenda blanditiis perspiciatis nesciunt illo ea eaque magnam culpa officiis ullam praesentium obcaecati eveniet ducimus! Aperiam optio et sed? Tempore, blanditiis inventore eius velit nemo tenetur cum in minus quibusdam veritatis repellendus itaque ad ab delectus reiciendis sapiente vel consequuntur nisi nesciunt, quo adipisci eaque? Sed quas aliquid, at rerum ratione reprehenderit. Eligendi veniam laborum rem repudiandae doloribus esse neque, recusandae vitae laboriosam iure id autem exercitationem magni, vel atque molestiae voluptate consequuntur sequi molestias sunt commodi omnis mollitia. Culpa ullam sint doloremque hic minus voluptate consequatur, distinctio voluptatum aspernatur illum veritatis nobis, quos commodi maiores est ipsam saepe fugit amet modi reiciendis sapiente et nihil a perferendis. Fugiat excepturi voluptates officiis? Nostrum doloribus est perferendis blanditiis totam laborum. Et, ab fuga placeat animi odit perspiciatis enim facere sint culpa recusandae quisquam ipsam atque vitae? Maxime voluptatem sapiente est obcaecati, nostrum neque eligendi dignissimos blanditiis voluptate odio labore tempore nihil? Minus placeat a repellendus modi accusamus sed ipsam deserunt esse quae corrupti. Assumenda nobis ratione quia?</p>
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

export {Samples};