import React from 'react';

const SelectInput = ({ label, id, required, name, value, onChange, options, validFeedback, invalidFeedback }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <select className="form-select" id={id} required={required} name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      {validFeedback && <div className="valid-feedback">{validFeedback}</div>}
      {invalidFeedback && <div className="invalid-feedback">{invalidFeedback}</div>}
    </div>
  );
};

export default SelectInput;
