import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import { Provider } from 'react-redux'; // Import Provider from react-redux
//import store from './components/store'; // Import your Redux store
import SideComponent from './components/sidebar';
import StepperComponent from './components/stepper';
import FileUploadComponent from './components/browsefile';
import FooterComponent from './components/footer';
import HorizontalComponent from './components/channeloptions';
import MappingComponent from'./components/mapping'
import './App.css';
//import data from './Data_files/schema.json';

import  AppProvider  from './AppContext';

const data ={
  "formats": ["json", "csv"],
    "version": 1,
    "channels": [
      "channel-1",
      "channel-2",
      "channel-3",
      "channel-4",
      "channel-5",
      "channel-6",
      "channel-7",
      "channel-8",
      "channel-9",
      "channel-9",
      "channel-10"
    ],
    "optionals": [
      {
        "optional1": true,
        "optional2": true
      }
    ]
} 
const channel_names = data.channels;
const optionals = data.optionals[0]; // Accessing the first element of the optionals array

const optionalKeys = Object.keys(optionals); // Getting the keys of the optional object

//console.log(optionalKeys);
// optionalKeys[0]=false;

const useStyles = makeStyles(() => ({
  // Your styles here
}));

const App = () => {
  const classes = useStyles();
  const [stepperColor, setStepperColor] = useState(0);

  const handleSaveClick = () => {
    setStepperColor(stepperColor => {
      // Limit the counter to a maximum value of 1
      if (stepperColor >=2) {
        return stepperColor;
      } else {
        return stepperColor + 1;
      }
    });
  };

  const handleBackClick = () => {
    setStepperColor(stepperColor => {
      // Limit the counter to a min value of -1
      if (stepperColor <= 0) {
        return stepperColor;
      } else {
        return stepperColor - 1;
      }
    });
  };
  const componentStyle = {
    position: 'relative',
    width: '1148px',
    left: '350px',
    borderRadius: '5px 5px 0px 0px',
    height: '72px',
    background: '#FFFFFF',
    marginTop:'90px',
    marginBottom:'200px',
    
  };

  const numbers = [0,1, 2, 3, 4, 5, 6, 7 ,8 ,9,10];
  const sub_numbers = [0,1, 2, 3, 4, 5, 6, 7 ,8 ,9,10];

  return (
    <>
      {/* //{setStepperColor('true')} */}
      <div className={classes.pageContainer} style={{ overflowX: 'hidden' }}>
        
        <SideComponent />
        <StepperComponent check={stepperColor}/>
        <FooterComponent onSaveClick={handleSaveClick} onBackClick={handleBackClick} />
        {stepperColor === 0 && (
          <div>
            <FileUploadComponent />
            </div>
        )}
        {stepperColor === 1 && (
          <>
             <div>
              {numbers.map((number, index) => (
                <AppProvider key={index} identifier={`component_${index}`}>
                  {(index===10)? (
                    <>
                    <div style={{marginBottom:'320px'}}>
                    <HorizontalComponent key ={index} channel_name={channel_names[index]}/>
                    </div>
                    <div style={componentStyle}>
                    <span style={{
                      position:'relative', left:'35px', top:'20px',fontStyle: 'normal',fontWeight: '500',fontSize: '16px'}}>
                        Additional Settings
                        </span>
                        <div style={{position:'relative',width:'700px', left:'350px',top:'0px',fontStyle: 'normal',fontWeight: '500',fontSize: '14px'}}>
                        <label>
                          <input
                            type="checkbox"
                            
                          />
                          {optionalKeys[0]}
                      </label>
                        </div>
                        <div style={{position:'absolute',width:'700px', left:'650px',top:'23px',fontStyle: 'normal',fontWeight: '500',fontSize: '14px'}}>
                        <label>
                          <input
                            type="checkbox"
                            
                          />
                          {optionalKeys[1]}
                      </label>
                        </div>
                        
                  </div>
                  </>

                  ) : (
                    <div>
                  <HorizontalComponent key ={index} channel_name={channel_names[index]}/>
                  </div>
                  )}
                  
                  
                </AppProvider>
                
              ))}
            </div>    
          </>
        )}
        {stepperColor === 2 && (
          <div style={{overflowY: 'hidden' }}>


          {sub_numbers.map((sub_number, index) => (
            <>
            {
              
              (() => {
                let localStorageKey = `channels_component_${index}`;
                let savedChannels = localStorage.getItem(localStorageKey);
                //console.log(JSON.parse(savedChannels));
                return (
                  <>
                  {(index === 10) ? (
                    
                      <div key ={index} style={{marginBottom:'500px'}}>
              
              <MappingComponent array={savedChannels}/>
          </div>
                   

                  ) : (
                    <div key ={index}>
              
                    <MappingComponent array={savedChannels}/>
                </div>
                  )}
                 </> 
                );
              })()
            }
            
             </>
          ))}
          </div>
          
        
        )}       
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
