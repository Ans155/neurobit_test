import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  fileUploadContainer: {
    position: 'absolute',
    width: '1148px',
    height: '320px',
    left: '356px',
    top: '250px',
    background: '#FFFFFF',
    borderRadius: '5.43313px',
    
  },

  box: {
    //boxSizing: 'border-box',
    position: 'absolute',
    width: '1084px',
    height: '256px',
    left: '32px',
    top: '32px',

    background: '#F8F8F8',
    border: '1.5px dashed #8A8A8A',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333333',
    
  },
  pT1: {
    position: 'absolute',
    top: '150px',
    left: '475px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333333',
  },
  uploadButton: {
    position: 'absolute',
    width: '174px',
    height: '45px',
    left: '457px',
    top: '99px',
    background: '#EAEAEA',
    border: '1px solid #6D6D6D',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333333',
    cursor: 'pointer',
  },
}));

const FileUploadComponent = () => {
  const classes = useStyles();
  const mystyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333333',
    left:'600px',
    
  };

  return (
    <div className={classes.fileUploadContainer}>
      
      <div className={classes.box}>
        <div style={mystyle}>
            <span className={classes.pT1}>or Drop Files Here </span>
            
        </div>
      {/* <span> or Drop Files Here</span> */}
      <button className={classes.uploadButton}>Browse Files</button>
      </div>
    </div>
  );
};

export default FileUploadComponent;
