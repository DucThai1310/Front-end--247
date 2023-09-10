import React from 'react';
import Task from '../Task';
import { styled } from 'styled-components';

const TaskList = props => {
  const { tasks } = props;
  return (
    <TaskListStyle>
      {tasks.map(task => (
        <Task key={task.id} {...task} />
      ))}
    </TaskListStyle>
  );
};

export default TaskList;

const TaskListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
