import React from 'react';

const InputGroup = ({ title, type, onChange, required, appendText }) => (
  <label className={ `flex items-center mb-5 ${appendText ? 'relative' : ''}` }>
    <span className="w-20 mr-5 text-right">
      { required && <small className="text-red-600 mr-2">*</small> }
      { title }
    </span>

    <input
      required={ required || false }
      type={ type || 'text' }
      className={ `border py-1 px-2 flex-grow ${type === 'number' ? 'appearance-none' : ''}` }
      onChange={ e => onChange(e.target.value) }
    />

    { appendText && <small className="text-gray-400 absolute right-2">{ appendText }</small> }
  </label>
);

export default InputGroup;
