import SideComponent from './components/sidebar'
import StepperComponent from './components/stepper'
import FileUploadComponent from './components/browsefile'
import FooterComponent from './components/footer'
import {React, useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import HorizontalComponent from './components/channeloptions';
import { Provider } from 'react-redux';
import { ChannelProvider } from './components/context';

import './App.css';
// import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

  lastHorizontalComponent: {
    marginBottom: '20px', // Add margin bottom
    //padding: '200px', // Add padding
  },
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
  const numbers = [1, 2, 3, 4, 5];

  return (
    
    // <ThemeProvider theme={theme}>
    <ChannelProvider>
      <div className={classes.pageContainer}>
        <SideComponent />
        <StepperComponent />
        {/* <StepperComponent /> */}
        
        <FooterComponent />
        <FooterComponent onSaveClick={handleSaveClick} onBackClick={handleBackClick}/>
        {<StepperComponent check={stepperColor} />
        }
        <div style={{height:'100%'}}>
        {(stepperColor==='true' )? (
          <>
          <div>
            {numbers.map((number) => (
              
            <HorizontalComponent key={number} id={number}/>
          ))}
            
            
          </div>
          <div style={{bottom : '0px',height:'120px'}}>
                <span>
                  abcdsjbcksd
                </span>
          </div>
          </>
        ) : (
          (<FileUploadComponent />)
        )}
        <div style={{height:'150px'}}>
        Additional div content
      </div>
        </div>
        
        {/* Add the rest of your page content here */}
      </div>
    // </ChannelProvider>
  );
};

export default App;


// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(() => ({
//   channelOptionsContainer: {
//     position: 'absolute',
//     width: '1508px',
//     height: '570px',
//     left: '0',
//     top: '0',
//     background: '#FFFFFF',
//     borderRadius: '5.43313px',
//     padding: '20px',
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   additionalChannelsContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginLeft: '20px',
//   },
// }));

// const ChannelOption = ({ label }) => {
//   return (
//     <div>
//       <label>{label}</label>
//       <input type="text" />
//     </div>
//   );
// };

// const App = () => {
//   const classes = useStyles();
//   const [primaryChannels, setPrimaryChannels] = useState(['']);
//   const [referenceChannels, setReferenceChannels] = useState(['']);

//   const handleAddChannels = () => {
//     setPrimaryChannels((prevPrimaryChannels) => [...prevPrimaryChannels, '']);
//     setReferenceChannels((prevReferenceChannels) => [...prevReferenceChannels, '']);
//   };

//   return (
//     <div className={classes.channelOptionsContainer}>
//       <ChannelOption label="Channel Name" />

//       <div className={classes.additionalChannelsContainer}>
//         {primaryChannels.map((_, index) => (
//           <ChannelOption key={index} label="Primary Channel" />
//         ))}
//       </div>

//       <div className={classes.additionalChannelsContainer}>
//         {referenceChannels.map((_, index) => (
//           <ChannelOption key={index} label="Reference Channel" />
//         ))}
//       </div>

//       <button onClick={handleAddChannels}>Add Additional Channels</button>
//     </div>
//   );
// };

// export default App;
