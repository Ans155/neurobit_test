import { combineReducers } from 'redux';
import {
  ADD_CHANNEL,
  DELETE_CHANNEL,
  UPDATE_CHANNEL_NAME,
  UPDATE_PRIMARY_CHANNEL,
  UPDATE_REFERENCE_CHANNEL,
  TOGGLE_HIDE_CHANNELS
} from './actions';

const initialState = {
  channels: [],
  hideChannels: false
};

const channelsReducer = (state = initialState.channels, action) => {
  switch (action.type) {
    case ADD_CHANNEL:
      return [...state, { channelName: '', primary: '', reference: '' }];
    case DELETE_CHANNEL:
      return state.filter((channel, index) => index !== action.payload);
    case UPDATE_CHANNEL_NAME:
      return state.map((channel, index) =>
        index === action.payload.index
          ? { ...channel, channelName: action.payload.name }
          : channel
      );
    case UPDATE_PRIMARY_CHANNEL:
      return state.map((channel, index) =>
        index === action.payload.index
          ? { ...channel, primary: action.payload.primary }
          : channel
      );
    case UPDATE_REFERENCE_CHANNEL:
      return state.map((channel, index) =>
        index === action.payload.index
          ? { ...channel, reference: action.payload.reference }
          : channel
      );
    default:
      return state;
  }
};

const hideChannelsReducer = (state = initialState.hideChannels, action) => {
  switch (action.type) {
    case TOGGLE_HIDE_CHANNELS:
      return !state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  channels: channelsReducer,
  hideChannels: hideChannelsReducer
});

export default rootReducer;

