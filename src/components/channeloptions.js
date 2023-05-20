
// const componentStyle = {
//     position: 'absolute',
//     width: '1148px',
//     height: '102px',
//     left: '350px',
//     top: '290px',
//     background: '#FFFFFF',
//     borderRadius: '5px 5px 0px 0px',
//   };

import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const HorizontalComponent = () => {
  const [channels, setChannels] = useState([{ channelName: '', primary: '', reference: '' }]);

  const addChannel = () => {
    setChannels([...channels, { primary: '', reference: '' }]);
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

  const componentStyle = {
    position: 'relative',
    width: '1148px',
    height: '82px',
    left: '350px',
    top: '290px',
    background: '#FFFFFF',
    borderRadius: '5px 5px 0px 0px',
    height: `${(channels.length * 70) + 62}px`,
  };
  // const containerStyle = {
  //   height: 'calc(100vh - 50px)', // Subtract the height of the footer (50px) from the viewport height
  //   overflowY: 'auto', // Enable vertical scrolling for the container
  // };
  return (
    // <div style={containerStyle}>
    <div style={componentStyle}>
      {channels.map((channel, index) => (
        <div key={index} style={{ marginBottom: '16px' }}>
          {(index>0) ? (
            (' ')
          ) : (
            (<TextField
              label="Channel Name"
              variant="outlined"
              placeholder="Channel Name"
              value={channel.channelName}
              onChange={(e) => handleChannelNameChange(index, e.target.value)}
              style={ {position: 'absolute', marginRight: '16px', left: '30px', top:'30px'  }}
            />)
          )

          }
          
          <Select
            displayEmpty
            variant="outlined"
            value={channel.primary}
            onChange={(e) => handlePrimaryChange(index, e.target.value)}
            style={{position: 'absolute', marginRight: '16px', left: '300px', top:`${(index * 80) + 30}px`  }}
          >
            <MenuItem value="" disabled>
              Primary Channel
            </MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
          <Select
            displayEmpty
            variant="outlined"
            value={channel.reference}
            onChange={(e) => handleReferenceChange(index, e.target.value)}
            style={{position: 'absolute', marginRight: '16px', left: '600px', top:`${(index * 80) + 30}px`  }}
          >
            <MenuItem value="" disabled>
              Reference Channel
            </MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </div>
      ))}
      <Button variant="contained" color="primary" onClick={addChannel} style={{ position: 'absolute', left: '900px', top:'30px' }}>
        Additional Channels
      </Button>
    </div>
    // </div>
  );
};

export default HorizontalComponent;
