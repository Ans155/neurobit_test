import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Stepper from '@material-ui/core/Stepper';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
const useStyles = makeStyles(() => ({
  stepperContainer: {
    position: 'absolute',
    width: '1108px',
    height: '97px',
    left: '356px',
    top: '70px',
    background: '#FFFFFF',
    borderRadius: '8px',
    padding: '20px',
  },
  pT1: {
    position: 'absolute',
    top: '80px',
    left: '130px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333333',
  },
  
  pT2: {
    position: 'absolute',
    top: '80px',
    left: '555px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333333',
  },
  pT3: {
    position: 'absolute',
    top: '80px',
    left: '992px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333333',
  },
  box1: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '50px',
    height: '50px',
    left: '153px',
    top: '27px',
    border: '2px solid #10A44B',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333333',
  },

  box2: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '50px',
    height: '50px',
    left: '583px',
    top: '27px',
    //ackground: check>=2 ? '#10A44B' : '#FFFFFF',
    border: '2px solid #10A44B',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333333',
  },
  box3: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '50px',
    height: '50px',
    left: '1013px',
    top: '27px',
    background: '#FFFFFF',
    border: '2px solid #10A44B',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333333',
  },
  line1: {
    position: 'absolute',
    width: '380px',
    height: '0px',
    left: '203px',
    top: '53px',
    border: '1px solid #C4C4C4',
  },
  line2: {
    position: 'absolute',
    width: '380px',
    height: '0px',
    left: '632px',
    top: '53px',
    border: '1px solid #C4C4C4',
  },
  line3: {
    position: 'absolute',
    width: '430px',
    height: '0px',
    left: '203px',
    top: '53px',
    border: '1px solid #C4C4C4',
  },
}));

const StepperComponent = ({ check }) => {
  const classes = useStyles();

  

  return (
    <div className={classes.stepperContainer}>
      
      {(check >= 1) ? (
        <span style={{color:'green'}} className={classes.pT1}>
          Upload EDFs </span>
      ) : (
        <span className={classes.pT1}>
          Upload EDFs </span>
      )}
      <div className={classes.box1} style={{background: check>=1 ? '#10A44B' : '#FFFFFF'}}>
        {check>=1 ?(
          
            <CheckOutlinedIcon />
            

        ) : (
          <span>
          1
          </span>
        )}
        
      </div>
      {(check >= 1) ? (
        <div style={{border: '1px solid green'}} className={classes.line1}></div>
      ) : (
        <div className={classes.line1}></div>
      )}
      

      {(check >= 2) ? (
        <span style={{color:'green'}} className={classes.pT2}>
          Map Channels</span>
      ) : (
        <span className={classes.pT2}>
          Map Channels</span>
      )}
      <div className={classes.box2} style={{background: check>=2 ? '#10A44B' : '#FFFFFF'}}>
      {check>=2 ?(
          
          <CheckOutlinedIcon />
          

      ) : (
        <span>
        2
        </span>
      )}
      </div>
      {(check >= 2) ? (
        <div style={{border: '1px solid green'}} className={classes.line2}></div>
      ) : (
        <div className={classes.line2}></div>
      )}

      {/* <span className={classes.pT2}>Map Channels</span>
      <div className={classes.box2}>
      <span>2</span>
      </div>
      <div className={classes.line2}></div> */}
      {(check >= 3) ? (
        <span style={{color:'green'}} className={classes.pT3}>
          Save & Preview </span>
      ) : (
        <span className={classes.pT3}>
          Save & Preview </span>
      )}
      <div className={classes.box3} style={{background: check===3 ? '#10A44B' : '#FFFFFF'}}>
      {check===3 ?(
          
          <CheckOutlinedIcon />
          

      ) : (
        <span>
        3
        </span>
      )}
      </div>
      


      
    
    </div>
  );
};

export default StepperComponent;
