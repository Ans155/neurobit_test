// context.js
import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

export const ChannelContext = createContext();

export const ChannelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    channels: [{ channelName: '', primary: '', reference: '' }],
  });

  return (
    <ChannelContext.Provider value={{ state, dispatch }}>
      {children}
    </ChannelContext.Provider>
  );
};
