import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Stepper from '@material-ui/core/Stepper';

const useStyles = makeStyles(() => ({
  stepperContainer: {
    position: 'absolute',
    width: '1108px',
    height: '97px',
    left: '356px',
    top: '80px',
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
  box1temp: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '50px',
    height: '50px',
    left: '153px',
    top: '27px',
    background: '#10A44B;',
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
  const stepperCheck = check === 'true' ? classes.box1temp : classes.box1;
  const val= check === 'true' ? "✔":"1" ;
  

  return (
    <div className={classes.stepperContainer}>
      
      {(check === 'true') ? (
        <span style={{color:'green'}} className={classes.pT1}>
          Upload EDFs </span>
      ) : (
        <span className={classes.pT1}>
          Upload EDFs </span>
      )}
      <div className={stepperCheck}>
        <span>{val}</span>
      </div>
      {(check === 'true') ? (
        <div style={{border: '1px solid green'}} className={classes.line1}></div>
      ) : (
        <div className={classes.line1}></div>
      )}
      
      <span className={classes.pT2}>Map Channels</span>
      <div className={classes.box2}>
      <span>2</span>
      </div>
      <div className={classes.line2}></div>
      <span className={classes.pT3}>Upload EDFs </span>
      <div className={classes.box3}>
      <span>3</span>
      </div>

    
    </div>
  );
};

export default StepperComponent;
