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
            <p>Please <a href="#">click here</a> to download the transcript</p>
            <p>You can reach out to MS Support for further assistance</p>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Finalmessage;
