import React from "react";
import PropTypes from "prop-types";
import "./ToDoInput.sass";

const ToDoInput = ({value, onChange, onKeyPress}) => (
    <div className='todo-input-wrapper'>
        <span className="fa-plus">+</span>
        <input type='text'
               className='todo-input'
               onChange={onChange}
               onKeyPress={onKeyPress}
               value={value}
               placeholder='Click to add a task'
        />
    </div>
);

ToDoInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
};

ToDoInput.defaultProps = {
    value: '',
    onChange: () => {},
    onKeyPress: () => {},
};

export default ToDoInput;
