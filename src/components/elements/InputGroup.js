import React from 'react'

const InputGroup = ({name, labelText, children}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{labelText}</label>
      <br />
      {children}
    </div>
  )
}

export default InputGroup