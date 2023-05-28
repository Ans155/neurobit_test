import React, { useState, useEffect } from 'react';
import CheckboxContext from './CheckboxContext';

const CheckboxProvider = ({ children }) => {
  const [checkboxState, setCheckboxState] = useState(null);

  useEffect(() => {
    const storedCheckboxState = localStorage.getItem('checkboxState');
    if (storedCheckboxState) {
      setCheckboxState(JSON.parse(storedCheckboxState));
    } else {
      setCheckboxState({
        checkbox1: false,
        checkbox2: false,
      });
    }
  }, []);

  useEffect(() => {
    if (checkboxState) {
      localStorage.setItem('checkboxState', JSON.stringify(checkboxState));
    }
  }, [checkboxState]);

  const toggleCheckbox = (checkboxName) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [checkboxName]: !prevState[checkboxName],
    }));
  };

  if (checkboxState === null) {
    return null; // or you can return a loading indicator
  }

  return (
    <CheckboxContext.Provider value={{ checkboxState, toggleCheckbox }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export default CheckboxProvider;
