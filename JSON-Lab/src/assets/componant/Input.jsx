// import React from 'react'
import PropTypes from "prop-types";

const InputForm = ({ fname, lname, onFnameChange, onLnameChange, onAddQueue }) => {
  return (
    <div className="queue-form">
      <input type="text" id="fname" name="fname" placeholder="First name" value={fname} onChange={onFnameChange} />
      <input type="text" id="lname" name="lname" placeholder="Last name" value={lname} onChange={onLnameChange} />
      <button onClick={onAddQueue}>ต่อคิว</button>
    </div>
  );
};

InputForm.propTypes = {
  fname: PropTypes.string.isRequired,
  lname: PropTypes.string.isRequired,
  onFnameChange: PropTypes.func.isRequired,
  onLnameChange: PropTypes.func.isRequired,
  onAddQueue: PropTypes.func.isRequired,
};

export default InputForm;
