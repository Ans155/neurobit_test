// import React, { useContext } from 'react';
// import { ChannelContext } from './context';
// import {
//   addChannel,
//   deleteChannel,
//   updateChannelName,
//   updatePrimaryChannel,
//   updateReferenceChannel,
// } from './actions';

// import TextField from '@material-ui/core/TextField';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import Button from '@material-ui/core/Button';
// import DeleteForeverOutlinedIcon from '@material-ui/icons/Delete';

// const HorizontalComponent = ({ id }) => {
//   const { state, dispatch } = useContext(ChannelContext);
//   const channels = state ? state.channels : [];
//   const hideChannels = state ? state.hideChannels : false;
//   const count = channels.length;
//   const originalHeight = 102;

//   const handleAddChannel = () => {
//     dispatch(addChannel());
//   };

//   const handleChannelNameChange = (index, value) => {
//     dispatch(updateChannelName(index, value));
//   };

//   const handlePrimaryChange = (index, value) => {
//     dispatch(updatePrimaryChannel(index, value));
//   };

//   const handleReferenceChange = (index, value) => {
//     dispatch(updateReferenceChannel(index, value));
//   };

//   const handleDeleteChannel = (index) => {
//     dispatch(deleteChannel(index));
//   };

//   const handleToggleHideChannels = () => {
//     dispatch({ type: 'TOGGLE_HIDE_CHANNELS' });
//   };

//   const hideChannelsHandler = () => {
//     dispatch({ type: 'TOGGLE_HIDE_CHANNELS' });
//   };

//   const componentStyle = {
//     position: 'relative',
//     width: '1148px',
//     left: '350px',
//     top: '290px',
//     //marginBottom: temp,
//     borderRadius: '5px 5px 0px 0px',
//     height: hideChannels ? originalHeight : `${count * 72 + 62}px`,
//     background: `linear-gradient(to bottom, #FFFFFF ${95}px, #CDCDCD ${95}px)`,
//     transition: 'height 0.3s ease-in-out',
//   };
//   const componentStyle1 = {
//     position: 'absolute',
//     width: '1148px',
//     left: '350px',
//     top: '230px',
//     height: '50px',
//     background: '#E5F3FF',
//     borderRadius: '3px',
//   };
//   const buttonStyle = {
//     position: 'absolute',
//     left: count === 0 ? '900px' : '60px',
//     top: count === 0 ? '30px' : `${count * 72 + 30}px`,
//     borderColor: 'white',
//     color: 'default',
//   };

//   return (
//     <>
//       <div style={componentStyle1}>
//         <span
//           style={{
//             position: 'absolute',
//             left: '45px',
//             top: '15px',
//             fontStyle: 'normal',
//             fontWeight: '500',
//             fontSize: '14px',
//           }}
//         >
//           Channel
//         </span>
//         <span
//           style={{
//             position: 'absolute',
//             left: '320px',
//             top: '15px',
//             fontStyle: 'normal',
//             fontWeight: '500',
//             fontSize: '14px',
//           }}
//         >
//           Primary Channel (default select)
//         </span>
//         <span
//           style={{
//             position: 'absolute',
//             left: '620px',
//             top: '15px',
//             fontStyle: 'normal',
//             fontWeight: '500',
//             fontSize: '14px',
//           }}
//         >
//           Reference Channel (default N/A)
//         </span>
//       </div>
//       <div style={componentStyle}>
//         {channels.map((channel, index) => (
//           <div key={index} style={{marginBottom: '16px'}}>
//             {index === 0 ? (
//               <>
//                 <TextField
//                   label="Channel Name"
//                   variant="outlined"
//                   placeholder="Channel Name"
//                   value={channel.channelName}
//                   onChange={(e) => handleChannelNameChange(index, e.target.value)}
//                   style={{ position: 'absolute', marginRight: '16px', left: '30px', top: '20px' }}
//                 />
//                 <Select
//                   displayEmpty
//                   variant="outlined"
//                   value={channel.primary}
//                   onChange={(e) => handlePrimaryChange(index, e.target.value)}
//                   style={{ position: 'absolute', marginRight: '16px', left: '350px', top: `${index * 72 + 20}px` }}
//                 >
//                   <MenuItem value="">
//                     <em>Primary Channel</em>
//                   </MenuItem>
//                   <MenuItem value="option1">Option 1</MenuItem>
//                   <MenuItem value="option2">Option 2</MenuItem>
//                   <MenuItem value="option3">Option 3</MenuItem>
//                 </Select>

//                 <Select
//                   displayEmpty
//                   variant="outlined"
//                   value={channel.reference}
//                   onChange={(e) => handleReferenceChange(index, e.target.value)}
//                   style={{ position: 'absolute', marginRight: '16px', left: '650px', top: `${index * 72 + 20}px` }}
//                 >
//                   <MenuItem value="">
//                     <em>Reference Channel</em>
//                   </MenuItem>
//                   <MenuItem value="option1">Option 1</MenuItem>
//                   <MenuItem value="option2">Option 2</MenuItem>
//                   <MenuItem value="option3">Option 3</MenuItem>
//                 </Select>

//                 {!hideChannels && (
//                   <Button variant="contained" onClick={addChannel} style={buttonStyle}>
//                     + Add Backup Channels
//                   </Button>
//                 )}
//               </>
//             ) : !hideChannels ? (
//               <>
//                 <Select
//                   displayEmpty
//                   variant="outlined"
//                   value={channel.primary}
//                   onChange={(e) => handlePrimaryChange(index, e.target.value)}
//                   style={{ position: 'absolute', marginRight: '16px', left: '350px', top: `${index * 72 + 30}px` }}
//                 >
//                   <MenuItem value="">
//                     <em>Primary Channel</em>
//                   </MenuItem>
//                   <MenuItem value="option1">Option 1</MenuItem>
//                   <MenuItem value="option2">Option 2</MenuItem>
//                   <MenuItem value="option3">Option 3</MenuItem>
//                 </Select>

//                 <Select
//                   displayEmpty
//                   variant="outlined"
//                   value={channel.reference}
//                   onChange={(e) => handleReferenceChange(index, e.target.value)}
//                   style={{ position: 'absolute', marginRight: '16px', left: '650px', top: `${index * 72 + 30}px` }}
//                 >
//                   <MenuItem value="">
//                     <em>Reference Channel</em>
//                   </MenuItem>
//                   <MenuItem value="option1">Option 1</MenuItem>
//                   <MenuItem value="option2">Option 2</MenuItem>
//                   <MenuItem value="option3">Option 3</MenuItem>
//                 </Select>

//                 <DeleteForeverOutlinedIcon                   style={{ position: 'absolute', left: '1050px', top: `${index * 72 + 26}px`, cursor: 'pointer' }}
//                   onClick={() => deleteChannel(index)}
//                 />
//               </>
//             ) : null}
//           </div>
//         ))}
//         {!hideChannels && count === 0 && (
//           <Button variant="contained" onClick={addChannel} style={buttonStyle}>
//             + Add Backup Channels
//           </Button>
//         )}
//         <Button
//           variant="contained"
//           onClick={hideChannelsHandler}
//           style={{
//             position: 'absolute',
//             left: '30px',
//             top: hideChannels ? `${count * 72 + 36}px` : `${count * 72 + 80}px`,
//           }}
//         >
//           {hideChannels ? 'Show Channels' : 'Hide Channels'}
//         </Button>
//       </div>
//     </>
//   );
// };

// export default HorizontalComponent;

                 
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import DeleteForeverOutlinedIcon from '@material-ui/icons/Delete';

const HorizontalComponent = ({ temp }) => {

  
  const [channels, setChannels] = useState([{ channelName: '', primary: '', reference: '' }]);
  const [count, setCount] = useState(0);
  const [hideChannels, setHideChannels] = useState(false);
  const originalHeight = 102;

  const addChannel = () => {
    setCount(count + 1);
    setChannels([...channels, { primary: '', reference: '' }]);
  };

  const deleteChannel = (index) => {
    const updatedChannels = [...channels];
    updatedChannels.splice(index, 1);
    setChannels(updatedChannels);
    setCount(count - 1);
  };

  const handleChannelNameChange = (index, value) => {
    const updatedChannels = [...channels];
    updatedChannels[index].channelName = value;
    setChannels(updatedChannels);
  };

  const handlePrimaryChange = (index, value) => {
    const updatedChannels = [...channels];
    updatedChannels[index].primary = value;
    setChannels(updatedChannels);
  };

  const handleReferenceChange = (index, value) => {
    const updatedChannels = [...channels];
    updatedChannels[index].reference = value;
    setChannels(updatedChannels);
  };

  const hideChannelsHandler = () => {
    setHideChannels(!hideChannels);
  };

  const componentStyle = {
    position: 'relative',
    width: '1148px',
    left: '350px',
    top: '290px',
    marginBottom: temp,
    borderRadius: '5px 5px 0px 0px',
    height: hideChannels ? originalHeight : `${channels.length * 72 + 62}px`,
    background: `linear-gradient(to bottom, #FFFFFF ${95}px, #CDCDCD ${95}px)`,
    transition: 'height 0.3s ease-in-out',
  };
  const componentStyle1 = {
    position: 'absolute',
    width: '1148px',
    left: '350px',
    top: '230px',
    height:'50px', 
    background: '#E5F3FF',
    borderRadius: '3px',
  };
  const buttonStyle = {
    position: 'absolute',
    left: count === 0 ? '900px' : '60px',
    top: count === 0 ? '30px' : `${count * 72 + 30}px`,
    borderColor: 'white',
    color: 'default',
  };

  return (
    <>
      <div style={componentStyle1}>
     <span style={{position:'absolute', left:'45px', top:'15px', fontStyle: 'normal',
fontWeight:'500',
fontSize: '14px'}}>
      Channel
     </span>
     <span style={{position:'absolute', left:'320px', top:'15px', fontStyle: 'normal',
fontWeight:'500',
fontSize: '14px'}}>
      Primary Channel (default select)
     </span>
     <span style={{position:'absolute', left:'620px', top:'15px', fontStyle: 'normal',
fontWeight:'500',
fontSize: '14px'}}>
      Reference Channel (default N/A)
     </span>
      </div>
      <div style={componentStyle}>
        {channels.map((channel, index) => (
          <div key={index} style={{ marginBottom: '16px' }}>
            {index === 0 ? (
              <>
                <TextField
                  label="Channel Name"
                  variant="outlined"
                  placeholder="Channel Name"
                  value={channel.channelName}
                  onChange={(e) => handleChannelNameChange(index, e.target.value)}
                  style={{ position: 'absolute', marginRight: '16px', left: '30px', top: '20px' }}
                />
                <Select
                  displayEmpty
                  variant="outlined"
                  value={channel.primary}
                  onChange={(e) => handlePrimaryChange(index, e.target.value)}
                  style={{ position: 'absolute', marginRight: '16px', left: '350px', top: `${index * 72 + 20}px` }}
                >
                  <MenuItem value="" disabled>
                    Primary Channel
                  </MenuItem>
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                  <MenuItem value="option3">Option 3</MenuItem>
                  <MenuItem value="option1">Option 4</MenuItem>
                  <MenuItem value="option2">Option 5</MenuItem>
                  <MenuItem value="option3">Option 6</MenuItem>
                  <MenuItem value="option1">Option 7</MenuItem>
                  <MenuItem value="option2">Option 8</MenuItem>
                  <MenuItem value="option3">Option 9</MenuItem>
                  <MenuItem value="option1">Option 10</MenuItem>
                  <MenuItem value="option2">Option 11</MenuItem>
                  <MenuItem value="option3">Option 12</MenuItem>
                </Select>

                <Select
                  displayEmpty
                  variant="outlined"
                  value={channel.reference}
                  onChange={(e) => handleReferenceChange(index, e.target.value)}
                  style={{ position: 'absolute', marginRight: '16px', left: '650px', top: `${index * 72 + 20}px` }}
                >
                  <MenuItem value="" disabled>
                    Reference Channel
                  </MenuItem>
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                  <MenuItem value="option3">Option 3</MenuItem>
                  <MenuItem value="option1">Option 4</MenuItem>
                  <MenuItem value="option2">Option 5</MenuItem>
                  <MenuItem value="option3">Option 6</MenuItem>
                  <MenuItem value="option1">Option 7</MenuItem>
                  <MenuItem value="option2">Option 8</MenuItem>
                  <MenuItem value="option3">Option 9</MenuItem>
                  <MenuItem value="option1">Option 10</MenuItem>
                  <MenuItem value="option2">Option 11</MenuItem>
                  <MenuItem value="option3">Option 12</MenuItem>
                </Select>

                {!hideChannels && (
                  <Button variant="contained" onClick={addChannel} style={buttonStyle}>
                    + Add Backup Channels
                  </Button>
                )}
              </>
            ) : !hideChannels ? (
              <>
                <Select
                  displayEmpty
                  variant="outlined"
                  value={channel.primary}
                  onChange={(e) => handlePrimaryChange(index, e.target.value)}
                  style={{ position: 'absolute', marginRight: '16px', left: '350px', top: `${index * 72 + 30}px` }}
                >
                  <MenuItem value="" disabled>
                    Primary Channel
                  </MenuItem>
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                  <MenuItem value="option3">Option 3</MenuItem>
                  <MenuItem value="option1">Option 4</MenuItem>
                  <MenuItem value="option2">Option 5</MenuItem>
                  <MenuItem value="option3">Option 6</MenuItem>
                  <MenuItem value="option1">Option 7</MenuItem>
                  <MenuItem value="option2">Option 8</MenuItem>
                  <MenuItem value="option3">Option 9</MenuItem>
                  <MenuItem value="option1">Option 10</MenuItem>
                  <MenuItem value="option2">Option 11</MenuItem>
                  <MenuItem value="option3">Option 12</MenuItem>
                </Select>

                <Select
                  displayEmpty
                  variant="outlined"
                  value={channel.reference}
                  onChange={(e) => handleReferenceChange(index, e.target.value)}
                  style={{ position: 'absolute', marginRight: '16px', left: '650px', top: `${index * 72 + 30}px` }}
                >
                  <MenuItem value="" disabled>
                    Reference Channel
                  </MenuItem>
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                  <MenuItem value="option3">Option 3</MenuItem>
                  <MenuItem value="option1">Option 4</MenuItem>
                  <MenuItem value="option2">Option 5</MenuItem>
                  <MenuItem value="option3">Option 6</MenuItem>
                  <MenuItem value="option1">Option 7</MenuItem>
                  <MenuItem value="option2">Option 8</MenuItem>
                  <MenuItem value="option3">Option 9</MenuItem>
                  <MenuItem value="option1">Option 10</MenuItem>
                  <MenuItem value="option2">Option 11</MenuItem>
                  <MenuItem value="option3">Option 12</MenuItem>
                </Select>

                {index !== 0 && (
                  <Button
                    variant="contained"
                    onClick={() => deleteChannel(index)}
                    style={{
                      position: 'absolute',
                      left: '900px',
                      top: `${index * 72 + 30}px`,
                      border: 'none',
                      color: 'red',
                      background: 'white',
                      textTransform: 'none',
                    }}
                  >
                    <span style={{ color: 'red', textTransform: 'capitalize' }}>
                      <DeleteForeverOutlinedIcon style={{ color: 'red', textAlign: 'center' }} /> Delete
                    </span>
                  </Button>
                )}
              </>
            ) : null}
          </div>
        ))}

        {count > 0 && (
          <>
          
          <Button
            variant="contained"
            onClick={hideChannelsHandler}
            style={{ position: 'absolute', left: '900px', top: '20px' }}
          >
            {hideChannels ? `View backup channels (${count})` : `Hide backup channels (${count})`}
          </Button>
          </>
        )}
      </div>
    </>
  );
};

export default HorizontalComponent
