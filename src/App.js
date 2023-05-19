// import logo from './logo.svg';
import './App.css';
import SideComponent from './components/sidebar'
import StepperComponent from './components/stepper'

import React from 'react';
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

  return (
    // <ThemeProvider theme={theme}>
      <div className={classes.pageContainer}>
        <SideComponent />
        <StepperComponent />
        {/* Add the rest of your page content here */}
      </div>
    // </ThemeProvider>
  );
};

export default App;
