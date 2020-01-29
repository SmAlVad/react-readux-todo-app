import React, {Component} from "react";
import {connect} from "react-redux";

import {addTask, removeTask, completeTask, changeFilter} from "../../actions/actionCreator";

import ToDoInput from "../../components/todo-input/ToDoInput";
import ToDoList from "../../components/todo-list/ToDoList";
import Footer from "../../components/footer/Footer";
import "./ToDo.sass";

class ToDo extends Component {
    state = {
        taskText: ''
    };

    handlerInputChange = ({target: {value}}) => {
        this.setState({
            taskText: value
        })
    };

    addTask = ({key}) => {
        const {taskText} = this.state;

        if (taskText.length > 3 && key === 'Enter') {
            const {addTask} = this.props;
            addTask(Date.now(), taskText, false);
            this.setState({
                taskText: ''
            })
        }

    };

    filterTasks = (tasks, activeFilter) => {
      switch (activeFilter) {
          case 'completed':
              return tasks.filter(task => task.isCompleted === true);
          case 'active':
              return tasks.filter(task => task.isCompleted === false);
          default:
              return tasks
      }
    };

    getActiveTasksCounter = tasks => {
        return tasks.filter(task => task.isCompleted === false).length;
    };

    render() {
        const {taskText} = this.state;
        const {tasks, removeTask, completeTask, filters, changeFilter} = this.props;
        const isTasksExist = tasks && tasks.length > 0;
        const filteredTasks = this.filterTasks(tasks, filters);
        const activeTaskCounter = this.getActiveTasksCounter(tasks);

        return (
            <div className='todo-wrapper'>
                <ToDoInput onKeyPress={this.addTask} onChange={this.handlerInputChange} value={taskText}/>

                {isTasksExist &&
                <ToDoList
                    taskList={filteredTasks}
                    removeTask={removeTask}
                    completeTask={completeTask}
                />}

                {isTasksExist &&
                <Footer
                    amount={activeTaskCounter}
                    activeFilter={filters}
                    changeFilter={changeFilter}
                />}
            </div>
        )
    }
}

export default connect(({tasks, filters}) => ({
    tasks,
    filters
}), {addTask, removeTask, completeTask, changeFilter})(ToDo)
