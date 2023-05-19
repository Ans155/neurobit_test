// import logo from './logo.svg';
import './App.css';
import SideComponent from './components/sidebar'
import StepperComponent from './components/stepper'
import FileUploadComponent from './components/browsefile'
import FooterComponent from './components/footer'
import {React, useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
// import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';


// const theme = createTheme();

const useStyles = makeStyles(() => ({
  pageContainer: {
    display: 'flex',
    height: '100vh',
  },
}));

const App = () => {
  const classes = useStyles();
  // const [isStepperVisible, setIsStepperVisible] = useState(false);
  const [stepperColor, setStepperColor] = useState('false');

  const handleSaveClick = () => {
    // setIsStepperVisible(true);
    setStepperColor('true');
  };

  const handleBackClick = () => {
    // setIsStepperVisible(true);
    setStepperColor('false');
  };

  return (
    // <ThemeProvider theme={theme}>
      <div className={classes.pageContainer}>
        <SideComponent />
        {/* <StepperComponent /> */}
        <FileUploadComponent />
        <FooterComponent onSaveClick={handleSaveClick} onBackClick={handleBackClick}/>
        {<StepperComponent check={stepperColor} />}
        {/* Add the rest of your page content here */}
      </div>
    // </ThemeProvider>
  );
};

export default App;
