import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import { green } from '@material-ui/core/colors';
//import StepperComponent from './stepper'

const useStyles = makeStyles(() => ({
  footerContainer: {
    position: 'fixed',
    width: '1205px',
    height: '72px',
    left: '290px',
    bottom: '0',
    borderRadius:'4px',
    background: '#FFFFFF',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '20px',
    zIndex: '9999',
  },
  bbutton: {
    marginRight: '1100px',
    position: 'fixed',
    textTransform: 'none',
    border:'1px solid black',
    background:'#FFFFFF',
    width:'110px',
    left:'340px',
    
  },
  cbutton: {
    marginRight: '900px',
    position: 'fixed',
    textTransform: 'none',
    background:'#FFFFFF',
    width:'150px',
    left:'480px',
  },
  nbutton: {
    marginRight: '80px',
    position: 'fixed',
    textTransform: 'none',
    
    width:'110px',
  },
  highlightedDiv: {
    background: 'yellow',
    padding: '20px',
    marginTop: '200px',

  },
}));

const FooterComponent = ({ onSaveClick, onBackClick,count}) => {
  const classes = useStyles();
//   const [isSaveClicked, setIsSaveClicked] = useState(false);

//   const handleSaveClick = () => {
//     setIsSaveClicked(true);
//   };

  return (
    <div className={classes.footerContainer}>
      <Button 
      variant="contained"
      color="default"
      className={classes.bbutton}
      onClick={onBackClick}
      >
        Back
      </Button>
      <Button
        variant="text"
        color="default"
        className={`${classes.cbutton} ${classes.secondButton}`}
      >
        Cancel Montage
      </Button>
      <Button
        variant="contained"
        // color= {count === 2 ? "green" : "primary"}
        disabled={count === 3}
        style={{background: count >=2 ? 'green' : '#2F7EC7', color:'#FFFFFF', fontSize:'16px', opacity: count=== 3 ? '0.5' : '1'}}
        className={classes.nbutton}
        onClick={onSaveClick}
      >
        
          {count>=2? ('Save ') : ('Next')}
        
      </Button>
    </div>
  );
};

export default FooterComponent;
