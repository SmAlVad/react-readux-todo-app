import React from "react";
import PropTypes from "prop-types";

import "./ToDoItem.sass";

const ToDoItem = ({id, text, isCompleted, removeTask, completeTask}) => (
    <li className='todo-item'>
        <span onClick={() => completeTask(id)}
              className='check'
        >
            {isCompleted ? '✓' : ''}
        </span>

        <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>

        <span onClick={() => removeTask(id)}
              className='fa-times'
        >
            ×
        </span>
    </li>
);

ToDoItem.propTypes = {
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
    removeTask: PropTypes.func,
    completeTask: PropTypes.func,
    id: PropTypes.number.isRequired
};

ToDoItem.defaultProps = {
    text: '',
    isCompleted: false,
    removeTask: () => {},
    completeTask: () => {},
};

export default ToDoItem;
