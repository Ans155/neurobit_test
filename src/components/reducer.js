// reducers.js

import {
  ADD_CHANNEL,
  DELETE_CHANNEL,
  UPDATE_CHANNEL_NAME,
  UPDATE_PRIMARY_CHANNEL,
  UPDATE_REFERENCE_CHANNEL,
} from './actions';

const initialState = {
  channels: [],
  hideChannels: false,
};

const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHANNEL: {
      const newChannel = {
        channelName: '',
        primary: '',
        reference: '',
      };

      return {
        ...state,
        channels: [...state.channels, newChannel],
      };
    }
    case DELETE_CHANNEL: {
      const index = action.payload;
      const updatedChannels = [...state.channels];
      updatedChannels.splice(index, 1);

      return {
        ...state,
        channels: updatedChannels,
      };
    }
    case UPDATE_CHANNEL_NAME: {
      const { index, value } = action.payload;
      const updatedChannels = [...state.channels];
      updatedChannels[index].channelName = value;

      return {
        ...state,
        channels: updatedChannels,
      };
    }
    case UPDATE_PRIMARY_CHANNEL: {
      const { index, value } = action.payload;
      const updatedChannels = [...state.channels];
      updatedChannels[index].primary = value;

      return {
        ...state,
        channels: updatedChannels,
      };
    }
    case UPDATE_REFERENCE_CHANNEL: {
      const { index, value } = action.payload;
      const updatedChannels = [...state.channels];
      updatedChannels[index].reference = value;

      return {
        ...state,
        channels: updatedChannels,
      };
    }
    case 'TOGGLE_HIDE_CHANNELS': {
      return {
        ...state,
        hideChannels: !state.hideChannels,
      };
    }
    default:
      return state;
  }
};

export default channelReducer;
