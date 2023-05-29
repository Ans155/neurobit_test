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
import MyCheckboxesComponent from './components/additionalSettings'
import './App.css';
import data from './Data_files/schema.json';
import CheckboxProvider from './CheckboxProvider';
import  AppProvider  from './AppContext';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@material-ui/core/Button';
import Dashboard from './components/dashboard';
import Credits from './components/Credits';

const channel_names = data.channels;
const optionals = data.optionals[0]; // Accessing the first element of the optionals array

const optionalKeys = Object.keys(optionals);
//console.log(optionalKeys);
// optionalKeys[0]=false;
const lsk='checkboxState';

const useStyles = makeStyles(() => ({
  // Your styles here
}));

const App = () => {
  const classes = useStyles();
  const [stepperColor, setStepperColor] = useState(0);
  // const changeValue =({ind}) => {
  //   console.log(!data.optionals[ind]);
  //   //return data.optionals[ind]=!data.optionals[ind];
    
  // }
  
  const [abc, setAbc] = useState(true);
  const [dashboard, setDashboard] =useState(false);
  const [montages, setMontages] =useState(true);
  const [credits, setCredits] =useState(false);

  const handleSnackbarClose = () => {
    setAbc(false);
  };
  const handleDashboard = () => {
    setMontages(false);
    setDashboard(true);
    setCredits(false);
  };
  const handleMontages = () => {
    setMontages(true);
    setDashboard(false);
    setCredits(false);
  };
  const handleCredits = () => {
    setMontages(false);
    setDashboard(false);
    setCredits(true);
  };
  const handleSaveClick = () => {
    setStepperColor(stepperColor => {
      // Limit the counter to a maximum value of 1
      if (stepperColor >=3) {
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
  const handleReload = () => {
    window.location.reload();
  };
  const componentStyle = {
    position: 'relative',
    width: '1148px',
    left: '350px',
    borderRadius: '5px 5px 0px 0px',
    height: '72px',
    background: '#FFFFFF',
    marginTop:'10px',
    marginBottom:'10px',
    
  };
  const componentStyle1 = {
    position: 'relative',
    width: '1148px',
    left: '350px',
    borderRadius: '5px 5px 0px 0px',
    height: '72px',
    background: '#FFFFFF',
    marginTop:'40px',
    marginBottom:'150px',
    
  };

  const numbers = [0,1, 2, 3, 4, 5, 6, 7 ,8 ,9];
  const sub_numbers = [0,1, 2, 3, 4, 5, 6, 7 ,8 ,9];

  return (
    <>
      {/* //{setStepperColor('true')} */}
      <div className={classes.pageContainer} style={{ overflowX: 'hidden' }}>

        
        
        <SideComponent onDashboardClick={handleDashboard} onMontagesClick={handleMontages} onCreditsClick={handleCredits}/>
        { dashboard &&(
          <Dashboard />
        )}
        { credits &&(
          <Credits />
        )}
        { montages && (
          <>
        <StepperComponent check={stepperColor}/>
        <FooterComponent onSaveClick={handleSaveClick} onBackClick={handleBackClick} count={stepperColor} onCancelClick={handleReload}/>
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
                  {(index===9)? (
                    <>
                    <div style={{marginBottom:'280px'}}>
                    <HorizontalComponent key ={index} channel_name={channel_names[index]}/>
                    </div>
                    <div style={componentStyle}>
                    <span style={{
                      position:'relative', left:'35px', top:'20px',fontStyle: 'normal',fontWeight: '500',fontSize: '16px'}}>
                        Additional Settings
                        </span>
                        <CheckboxProvider>
                        <MyCheckboxesComponent/>
                        </CheckboxProvider>
                        
                        
                  </div>
                  <div style={componentStyle1} >
                    <span style={{
                      position:'relative', left:'35px', top:'20px',fontStyle: 'normal',fontWeight: '500',fontSize: '16px'}}>
                        Output Format : Wanombi.xml
                        </span>
                        
                        
                        
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
        {stepperColor >= 2 && (
          
          <>
          
          {stepperColor===3 && (
            
            <>
                     
            {abc && (
              <div style={{position:'absolute',boxShadow: '0px 3px 20px 4px rgba(0, 0, 0, 0.04)',
              borderRadius: '0px 0px 4px 4px', top:'0px',justifyContent: 'center',
              alignItems: 'center', left:'720px',width:'270px',  height:'70px', background:'#F1FFF7'}}>
              
              
                <Alert   icon ={false} severity="success" style={{ width: '270px', height:'70px',left:'40px' }} >
              
                  
                 <span style={{color:'green', top:'10px'}}>
                 <CheckCircleIcon />
                    
                  </span> 
                  <span style={{position:'absolute', top:'16px',left:'50px',fronWeight:'500', fontSize:'16px', color:'green'}}>
                 Channels Configured 
                 </span>
                  
                  <span  style={{position:'relative', top:'20px',fontSize:'10px',left:'0px'}}>
                  Channels configured successfully.
                  </span> 
                  <Button
                      variant="text"
                      color="default"
                      onClick={handleSnackbarClose}
                      style={{position:'absolute', width:'0',top:'0px',left:'230px' ,borderRadius:'505px'}}
                      
                    >
                      X
                    </Button>
                </Alert>
                
                  
                
              
                          </div>
            )}
          </>
          )}
          
          <div style={{overflowY: 'hidden' }}>


          {sub_numbers.map((sub_number, index) => (
            <>
            {
              
              (() => {
                let localStorageKey = `channels_component_${index}`;
                let savedChannels = localStorage.getItem(localStorageKey);
                let savedaddsettings = localStorage.getItem(lsk);
                savedaddsettings=JSON.parse(savedaddsettings);
                //console.log(JSON.parse(savedChannels));
                return (
                  <>
                  {(index === 9) ? (
                    <>
                      <div key ={index} style={{marginBottom:'350px'}}>
              
              <MappingComponent  array={savedChannels} c_name={channel_names[index]} onBackClick={handleBackClick} stepperColor={stepperColor}/>
          </div>
                      <div style={componentStyle}>
                      <span style={{
                      position:'relative', left:'35px', top:'20px',fontStyle: 'normal',fontWeight: '500',fontSize: '16px',background:'#FFFFFF'}}>
                        Additional Settings : 
                        </span >
                        
                        <span style={{
                      position:'relative', left:'80px', top:'20px',fontStyle: 'normal',fontSize: '16px'}}>
                        {savedaddsettings.checkbox1===true ? (
                            <>
                            {savedaddsettings.checkbox2===true ? (
                              <>
                              <span>
                                  {optionalKeys[0]}
                              </span>
                              <span>
                              ,  {optionalKeys[1]}
                              </span>
                              </>
                          ) : (
                              (optionalKeys[0])
                          )}
                          </>
                        ) : (
                          <>
                          {savedaddsettings.checkbox2===true ? (
                            (optionalKeys[1])
                        ) : (
                            ('No additional settings selected')
                        )}
                        </>
                        )}
                        </span>
                      </div>
                      <div style={componentStyle1} >
                    <span style={{
                      position:'relative', left:'35px', top:'20px',fontStyle: 'normal',fontWeight: '500',fontSize: '16px'}}>
                        Output Format : Wanombi.xml
                        </span>
                        
                        
                        
                  </div>
                      </>
                   

                  ) : (
                    <div key ={index}>
              
                    <MappingComponent array={savedChannels} c_name={channel_names[index]} onBackClick={handleBackClick} stepperColor={stepperColor}/>
                </div>
                  )}
                 </> 
                );
              })()
            }
            
             </>
          ))}
          </div>

        
          
        </>
        )}
        </>
        )   }
      </div>
      </>
  );
};

export default App;
