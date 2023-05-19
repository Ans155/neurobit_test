import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
  },
  bbutton: {
    marginRight: '1100px',
    position: 'fixed',
  },
  cbutton: {
    marginRight: '900px',
    position: 'fixed',
  },
}));

const FooterComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <Button variant="contained" color="background: #FFFFFF;" className={classes.bbutton}>
        Back
      </Button>
      <Button
        variant="contained"
        color="default"
        className={`${classes.cbutton} ${classes.secondButton}`}
      >
        Cancel Montage
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Save
      </Button>
    </div>
  );
};

export default FooterComponent;
