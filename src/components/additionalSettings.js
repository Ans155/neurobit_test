import React, { useContext } from 'react';
import CheckboxContext from '../CheckboxContext';
import data from '../Data_files/schema.json';

const optionals = data.optionals[0]; // Accessing the first element of the optionals array

const optionalKeys = Object.keys(optionals); // Getting the keys of the optional object


const MyCheckboxesComponent = () => {
  const { checkboxState, toggleCheckbox } = useContext(CheckboxContext);

  const handleCheckboxToggle = (checkboxName) => {
    toggleCheckbox(checkboxName);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checkboxState.checkbox1}
          style={{position: 'absolute', left:'300px'}}
          onChange={() => handleCheckboxToggle('checkbox1')}
        />
        <span style={{position: 'absolute', left:'320px',top:'20px'}}>
        {optionalKeys[0]}
        </span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={checkboxState.checkbox2}
          style={{position: 'absolute', left:'600px'}}
          onChange={() => handleCheckboxToggle('checkbox2')}
        />
        <span style={{position: 'absolute', left:'620px',top:'20px'}}>
        {optionalKeys[1]}
        </span>
        
      </label>
    </div>
  );
};

export default MyCheckboxesComponent;
