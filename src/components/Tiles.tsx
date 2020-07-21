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
import Outlook from "../assets/Outlook.png"
import Office from "../assets/Office.png"

const Tiles = () => {
    //give some boder and some shadow
  return (
        <Row>
          <a href="/TroubleshootingGuide/OfficeTopics/">
      <Card className="_Card"> 
        <CardImg top width="100%" src={Office} alt="MS Office" />
          <CardTitle>Microsoft Office</CardTitle>
      </Card></a>
      <a href="/TroubleshootingGuide/OfficeTopics/">
      <Card className="_Card"> 
        <CardImg top width="100%" src={Office} alt="MS Office" />
        <CardTitle>Microsoft Office Dev</CardTitle>
      </Card>
      </a>
      <Card className="_Card"> 
        <CardImg top width="100%" src={SharePoint} alt="SharePoint" />
        <CardTitle>Microsoft SharePoint</CardTitle>
      </Card>
      <Card className="_Card"> 
        <CardImg top width="100%" src={SharePoint} alt="SharePoint dev" />
        <CardTitle>Microsoft SharePoint Dev</CardTitle>
      </Card>
      <Card className="_Card"> 
        <CardImg top width="100%" src={Outlook} alt="Outlook" />
        <CardTitle>Outlook</CardTitle>
      </Card>
      <Card className="_Card"> 
        <CardImg top width="100%" src={Outlook} alt="Outlook dev" />
        <CardTitle>Outlook dev</CardTitle>
      </Card>
      <Card className="_Card"> 
        <CardImg top width="100%" src={Microsoft_Teams} alt="Microsoft_Teams" />
        <CardTitle>Microsoft Teams</CardTitle>
      </Card>
      <Card className="_Card"> 
        <CardImg top width="100%" src={Skype} alt="Skype" />
        <CardTitle>Skype</CardTitle>
      </Card>
      </Row>
  );
};

export default Tiles;