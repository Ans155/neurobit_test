import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export function AppProvider({ identifier, children }) {
  const localStorageKey = `channels_${identifier}`;

  const [channels, setChannels] = useState(() => {
    const savedChannels = localStorage.getItem(localStorageKey);
    return savedChannels ? JSON.parse(savedChannels) : [{ channelName: '', primary: '', reference: '' }];
  });

  const [count, setCount] = useState(() => {
    const savedChannels = localStorage.getItem(localStorageKey);
    return savedChannels ? JSON.parse(savedChannels).length : 0;
  });
  const [hideChannels, setHideChannels] = useState(false);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(channels));
  }, [channels]);

  const addChannel = () => {
    setCount(prevCount => prevCount + 1);
    setChannels(prevChannels => [...prevChannels, { primary: '', reference: '' }]);
  };

  const deleteChannel = (index) => {
    setChannels(prevChannels => {
      const updatedChannels = [...prevChannels];
      updatedChannels.splice(index, 1);
      return updatedChannels;
    });
    setCount(prevCount => prevCount - 1);
  };

  const handlePrimaryChange = (index, value) => {
    setChannels(prevChannels => {
      const updatedChannels = [...prevChannels];
      updatedChannels[index].primary = value;
      return updatedChannels;
    });
  };

  const handleReferenceChange = (index, value) => {
    setChannels(prevChannels => {
      const updatedChannels = [...prevChannels];
      updatedChannels[index].reference = value;
      return updatedChannels;
    });
  };

  const hideChannelsHandler = () => {
    setHideChannels(prevHideChannels => !prevHideChannels);
  };

  const contextValue = {
    channels,
    count,
    hideChannels,
    addChannel,
    deleteChannel,
    handlePrimaryChange,
    handleReferenceChange,
    hideChannelsHandler,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

export default AppProvider;