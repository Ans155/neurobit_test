// actions.js

export const ADD_CHANNEL = 'ADD_CHANNEL';
export const DELETE_CHANNEL = 'DELETE_CHANNEL';
export const UPDATE_CHANNEL_NAME = 'UPDATE_CHANNEL_NAME';
export const UPDATE_PRIMARY_CHANNEL = 'UPDATE_PRIMARY_CHANNEL';
export const UPDATE_REFERENCE_CHANNEL = 'UPDATE_REFERENCE_CHANNEL';

export const addChannel = () => ({
  type: ADD_CHANNEL,
});

export const deleteChannel = (index) => ({
  type: DELETE_CHANNEL,
  payload: index,
});

export const updateChannelName = (index, value) => ({
  type: UPDATE_CHANNEL_NAME,
  payload: { index, value },
});

export const updatePrimaryChannel = (index, value) => ({
  type: UPDATE_PRIMARY_CHANNEL,
  payload: { index, value },
});

export const updateReferenceChannel = (index, value) => ({
  type: UPDATE_REFERENCE_CHANNEL,
  payload: { index, value },
});
