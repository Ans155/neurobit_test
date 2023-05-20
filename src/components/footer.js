import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
  },
  cbutton: {
    marginRight: '900px',
    position: 'fixed',
  },
  nbutton: {
    marginRight: '80px',
    position: 'fixed',
  },
  highlightedDiv: {
    background: 'yellow',
    padding: '20px',
    marginTop: '200px',
  },
}));

const FooterComponent = ({ onSaveClick, onBackClick}) => {
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
        variant="contained"
        color="default"
        className={`${classes.cbutton} ${classes.secondButton}`}
      >
        Cancel Montage
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.nbutton}
        onClick={onSaveClick}
      >
        Next
      </Button>
    </div>
  );
};

export default FooterComponent;
