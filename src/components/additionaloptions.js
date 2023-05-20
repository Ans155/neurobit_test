import React from 'react';
import Button from '@material-ui/core/Button';

const AdditionalChannels = ({ onAddPrimaryChannel, onAddReferenceChannel }) => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={onAddPrimaryChannel}
      >
        Add Primary Channel
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={onAddReferenceChannel}
      >
        Add Reference Channel
      </Button>
    </div>
  );
};

export default AdditionalChannels;