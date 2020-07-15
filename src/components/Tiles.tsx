import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardGroup,Row,Col 
} from 'reactstrap';

import Forms from "../assets/Forms.png"
import Microsoft_Teams from "../assets/Microsoft_Teams.png"
import OneNote from "../assets/OneNote.png"
import SharePoint from "../assets/SharePoint.png"
import PowerPoint from "../assets/PowerPoint.png"
import Skype from "../assets/Skype.png"
import SkypeforBusiness from "../assets/SkypeforBusiness.png"
import Yammer from "../assets/Yammer.png"

const Tiles = () => {
    //give some boder and some shadow
  return (
        <Row>
      <Card className="_Card"> 
        <CardImg top width="100%" src={Forms} alt="MS Forms" />
          <CardTitle>MS Forms</CardTitle>
      </Card>
      <Card className="_Card"> 
        <CardImg top width="100%" src={Microsoft_Teams} alt="Microsoft_Teams" />
        <CardTitle>Microsoft Teams Dev</CardTitle>
      </Card>
      <Card className="_Card"> 
        <CardImg top width="100%" src={Microsoft_Teams} alt="Microsoft_Teams" />
        <CardTitle>Microsoft Teams</CardTitle>
      </Card>
      <Card className="_Card"> 
        <CardImg top width="100%" src={OneNote} alt="OneNote" />
        <CardTitle>Microsoft OneNote</CardTitle>
      </Card>
      <Card className="_Card"> 
        <CardImg top width="100%" src={SharePoint} alt="SharePoint" />
        <CardTitle>Microsoft SharePoint</CardTitle>
      </Card>
      <Card className="_Card"> 
        <CardImg top width="100%" src={SharePoint} alt="SharePoint" />
        <CardTitle>Microsoft SharePoint Dev</CardTitle>
      </Card>
      <Card className="_Card"> 
        <CardImg top width="100%" src={Skype} alt="Skype" />
      </Card>
      <Card className="_Card"> 
        <CardImg top width="100%" src={PowerPoint} alt="PowerPoint" />
      </Card>

      </Row>
  );
};

export default Tiles;