import React, { Component,Button } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

export class Finalmessage extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  close = () => {
    window.location = '/TroubleshootingGuide'; 
  };

  download = () => {
    var text=" Product Selected: Office Dev \n Issue : Performance issue \n Scenario :Is your Office updated to the latest version as the issue may have been addressed in latest patches? Please navigate to Office app -? File -> About -> to get information of the Office version installed in you \n Response : yes \n Scenario :Hardware plays a critical role in this context – so is the RAM, disk type and CPU speed same for the machines (Office 2010 versus Office 2016 for instance) you are comparing the performance? \n Response : yes \n Scenario :Have you Checked the “Disable hardware graphics acceleration” check box under File-> Options -> Advanced -> Display section ? \n Response : yes \n ";
    var name="Transcript.txt";
    var type="text/plain";
      var a = document.getElementById("a");
      var file = new Blob([text], {type: type});
      a.href = URL.createObjectURL(file);
      a.download = name;
      a.click();
  };


  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog 
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <div>
            <button onClick={this.close} className="close">&times;</button>
            <h3>Thank you for your time</h3> 
            {/* <Button/> */}
            </div>
            <a className="hiden" href="" id="a">click here to download your file</a>
            <p>Please <a onClick={this.download} href="#">click here</a> to download the transcript</p>
            <p>You can reach out to MS Support for further assistance</p>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Finalmessage;
