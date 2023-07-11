import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

function Task(props) {
  const navigate = useNavigate();
  const { title, id, description, creator, createAt, status } = props;
  const goToDetail = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <TaskContainer className={status.toLowerCase()} onClick={goToDetail}>
      <div className='title'>{title}</div>
      <div className='create'>{creator}</div>
      <div className={`status`}>{status}</div>
      <div className='line'></div>
      <div className='description'>{description}</div>
    </TaskContainer>
  );
}

export default Task;

const TaskContainer = styled.div`
  font-size: 17px;
  cursor: pointer;
  width: 200px;
  border: 1px solid rgb(79, 152, 202);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  box-shadow: 5px 4px 5px rgba(173, 222, 255, 0.712);
  .status {
    font-weight: 600;
  }
  &.todo {
    background-color: #ff00002b;
    .status {
      color: red;
    }
  }
  &.inprogress {
    background-color: #0033ff33;
    .status {
      color: #0034ff;
    }
  }
  &.done {
    background-color: #00807343;
    .status {
      color: #00806b;
    }
  }
  .title {
    font-weight: 600;
  }
  .create {
    font-style: italic;
    font-size: 15px;
  }

  .line {
    width: 100%;
    margin: 10px 0;
    height: 2px;
    background-color: rgb(79, 152, 202);
  }
  .description {
    font-size: 15px;
  }
`;
