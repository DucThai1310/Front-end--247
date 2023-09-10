import { createContext, useEffect, useState } from 'react';
import { TASK_KEY } from '../constants';

export const TaskContext = createContext( undefined );

export const TaskContextProvider = props => {
  const [tasks, setTasks] = useState([]);
  const { children } = props;

  useEffect(() => {
    const taskFromLocal = localStorage.getItem(TASK_KEY);
    if (taskFromLocal) {
      const tasksList = JSON.parse(taskFromLocal);
      if (Array.isArray(tasksList)) {
        setTasks(tasksList);
      }
    }
  }, []);
  const setListTask = taskList => {
    setTasks(taskList);
    localStorage.setItem(TASK_KEY, JSON.stringify(taskList));
  };
  return (
    <TaskContext.Provider value={{ tasks, setTasks: setListTask, open: true }}>
      {children}
    </TaskContext.Provider>
  );
};
