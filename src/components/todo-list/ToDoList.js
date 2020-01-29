import React from "react";
import PropTypes from "prop-types";
import ToDoItem from "../todo-item/ToDoItem";
import "./ToDoList.sass";

const ToDoList = ({taskList, removeTask, completeTask}) => (
    <ul className='todo-list'>
        {taskList.map(({id, text, isCompleted}) => (
            <ToDoItem key={id}
                      id={id}
                      text={text}
                      isCompleted={isCompleted}
                      removeTask={removeTask}
                      completeTask={completeTask}
            />
        ))}
    </ul>
);

ToDoList.propTypes = {
    taskList: PropTypes.array,
    removeTask: PropTypes.func,
    completeTask: PropTypes.func,
};

ToDoList.defaultProps = {
    taskList: '',
    removeTask: () => {},
    completeTask: () => {},
};

export default ToDoList;
