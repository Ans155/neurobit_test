import React, { useContext} from 'react';
import { AppContext } from '../AppContext';

//import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import DeleteForeverOutlinedIcon from '@material-ui/icons/Delete';

const HorizontalComponent = ({ channel_name }) => {

  
  const {
    channels,
    count,
    hideChannels,
    addChannel,
    deleteChannel,
    handlePrimaryChange,
    handleReferenceChange,
    hideChannelsHandler,
  } = useContext(AppContext);
  const originalHeight = 102;
  const componentStyle = {
    position: 'relative',
    width: '1148px',
    left: '350px',
    top: '290px',
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
    left: count === 1 ? '900px' : '350px',
    top: count === 1 ? '30px' : `${count * 72 + 30}px`,
    // borderColor: '#FFFFFF',
    background:count === 1 ? '#FFFFFF':'#CDCDCD',
    border:count === 1 ? '1px solid blue':'#CDCDCD',
    color: 'blue',
    fontSize:count === 1? '14px' :'13px',
    textTransform: 'none',
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
                <span
              style={{
                position: 'absolute',
                left: '30px',
                top: '20px',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '14px',
              }}
            >
              {channel_name}
            </span>
                <Select
                  displayEmpty
                  variant="outlined"
                  value={channel.primary}
                  onChange={(e) => handlePrimaryChange(index, e.target.value)}
                  style={{ position: 'absolute', marginRight: '16px', left: '350px', top: `${index * 72 + 20}px` }}
                >
                  <MenuItem value="" disabled>
                    Select Channel
                  </MenuItem>
                  <MenuItem value="option1">C3</MenuItem>
                  <MenuItem value="option2">C3:A2</MenuItem>
                  <MenuItem value="option3">C4</MenuItem>
                  <MenuItem value="option4">C4:A2</MenuItem>
                  <MenuItem value="option5">C5</MenuItem>
                  <MenuItem value="option6">C5:A2</MenuItem>
                  <MenuItem value="option7">EOGL</MenuItem>
                  <MenuItem value="option8">EOGR</MenuItem>
                  <MenuItem value="option9">EMG</MenuItem>
                  <MenuItem value="option10">C4</MenuItem>
                  <MenuItem value="option11">C4:A1</MenuItem>
                  <MenuItem value="option12">C3:A1</MenuItem>
                  
                </Select>

                <Select
                  displayEmpty
                  variant="outlined"
                  value={channel.reference}
                  onChange={(e) => handleReferenceChange(index, e.target.value)}
                  style={{ position: 'absolute', marginRight: '16px', left: '650px', top: `${index * 72 + 20}px` }}
                >
                  <MenuItem value="" disabled>
                  Select Channel
                  </MenuItem>
                  <MenuItem value="option1">C3</MenuItem>
                  <MenuItem value="option2">C3:A2</MenuItem>
                  <MenuItem value="option3">C4</MenuItem>
                  <MenuItem value="option4">C4:A2</MenuItem>
                  <MenuItem value="option5">C5</MenuItem>
                  <MenuItem value="option6">C5:A2</MenuItem>
                  <MenuItem value="option7">EOGL</MenuItem>
                  <MenuItem value="option8">EOGR</MenuItem>
                  <MenuItem value="option9">EMG</MenuItem>
                  <MenuItem value="option10">C4</MenuItem>
                  <MenuItem value="option11">C4:A1</MenuItem>
                  <MenuItem value="option12">C3:A1</MenuItem>
                  
                </Select>
                {!hideChannels && (
                  <Button variant = {(count===1) ? "contained" : "text"} onClick={addChannel} style={buttonStyle}>
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
                  Select Channel
                  </MenuItem>
                  <MenuItem value="option1">C3</MenuItem>
                  <MenuItem value="option2">C3:A2</MenuItem>
                  <MenuItem value="option3">C4</MenuItem>
                  <MenuItem value="option4">C4:A2</MenuItem>
                  <MenuItem value="option5">C5</MenuItem>
                  <MenuItem value="option6">C5:A2</MenuItem>
                  <MenuItem value="option7">EOGL</MenuItem>
                  <MenuItem value="option8">EOGR</MenuItem>
                  <MenuItem value="option9">EMG</MenuItem>
                  <MenuItem value="option10">C4</MenuItem>
                  <MenuItem value="option11">C4:A1</MenuItem>
                  <MenuItem value="option12">C3:A1</MenuItem>
                  
                </Select>

                <Select
                  displayEmpty
                  variant="outlined"
                  value={channel.reference}
                  onChange={(e) => handleReferenceChange(index, e.target.value)}
                  style={{ position: 'absolute', marginRight: '16px', left: '650px', top: `${index * 72 + 30}px` }}
                >
                  <MenuItem value="" disabled>
                  Select Channel
                  </MenuItem>
                  <MenuItem value="option1">C3</MenuItem>
                  <MenuItem value="option2">C3:A2</MenuItem>
                  <MenuItem value="option3">C4</MenuItem>
                  <MenuItem value="option4">C4:A2</MenuItem>
                  <MenuItem value="option5">C5</MenuItem>
                  <MenuItem value="option6">C5:A2</MenuItem>
                  <MenuItem value="option7">EOGL</MenuItem>
                  <MenuItem value="option8">EOGR</MenuItem>
                  <MenuItem value="option9">EMG</MenuItem>
                  <MenuItem value="option10">C4</MenuItem>
                  <MenuItem value="option11">C4:A1</MenuItem>
                  <MenuItem value="option12">C3:A1</MenuItem>
                  
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
                      background: '#CDCDCD',
                      textTransform: 'none',
                    }}
                  >
                    <span style={{ position:'relative',color: 'red', textTransform: 'capitalize' }}>
                      <DeleteForeverOutlinedIcon style={{position:'relative', top:'6px', color: 'red' }} /> Delete
                    </span>
                  </Button>
                )}
              </>
            ) : null}
          </div>
        ))}

        {count > 1 && (
          <>
          
          <Button
            variant="text"
            onClick={hideChannelsHandler}
            style={{ position: 'absolute', left: '900px', top: '20px',background:'#FFFFFF',color:'blue',textTransform: 'none',fontSize:'16px'}}
          >
            {hideChannels ? `View backup channels (${count-1})` : `Hide backup channels (${count-1})`}
          </Button>
          </>
        )}
      </div>
    </>
  );
};

export default HorizontalComponent