import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Stepper from '@material-ui/core/Stepper';

const useStyles = makeStyles(() => ({
  stepperContainer: {
    position: 'absolute',
    width: '1108px',
    height: '137px',
    left: '356px',
    top: '120px',
    background: '#FFFFFF',
    borderRadius: '8px',
    padding: '20px',
  },
  positionedText: {
    position: 'absolute',
    top: '50px',
    left: '100px',
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

const StepperComponent = () => {
  const classes = useStyles();
  

  return (
    <div className={classes.stepperContainer}>
      <div className={classes.box1}>
        <span>1</span>
      </div>
      <div className={classes.line1}></div>
      <div className={classes.box2}>
      <span>2</span>
      </div>
      <div className={classes.line2}></div>
      <div className={classes.box3}>
      <span>3</span>
      </div>

    
    </div>
  );
};

export default StepperComponent;
