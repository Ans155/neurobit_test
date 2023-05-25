import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import { Provider } from 'react-redux'; // Import Provider from react-redux
//import store from './components/store'; // Import your Redux store
import SideComponent from './components/sidebar';
import StepperComponent from './components/stepper';
import FileUploadComponent from './components/browsefile';
import FooterComponent from './components/footer';
import HorizontalComponent from './components/channeloptions';
import './App.css';
import data from './Data_files/schema.json';

import  AppProvider  from './AppContext';
const channel_names = data.channels;


const useStyles = makeStyles(() => ({
  // Your styles here
}));

const App = () => {
  const classes = useStyles();
  const [stepperColor, setStepperColor] = useState('false');

  const handleSaveClick = () => {
    setStepperColor('true');
  };

  const handleBackClick = () => {
    setStepperColor('false');
  };

  const numbers = [1, 2, 3, 4, 5];

  return (
    <>
      {/* //{setStepperColor('true')} */}
      <div className={classes.pageContainer}>
     
        <SideComponent />
        <StepperComponent />
        <FooterComponent onSaveClick={handleSaveClick} onBackClick={handleBackClick} />

        {stepperColor === 'true' ? (
          <>
             <div>
              {numbers.map((number, index) => (
                <AppProvider key={index} identifier={`component_${index}`}>
                  <HorizontalComponent key ={index} channel_name={channel_names[index]}/>
                </AppProvider>
                
              ))}
            </div>

            <div style={{ bottom: '0px', height: '120px' }}>
              <span>abcdsjbcksd</span>
            </div>
          </>
        ) : (
          // ('')
          <FileUploadComponent />
        )}

        <div style={{ height: '150px' }}>Additional div content</div>
      </div>
      </>
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
