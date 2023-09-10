import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { STATUS_LIST, TODO } from '../../constants';
import Button from '../Button';
const defaultValue = {
  title: '',
  creator: '',
  createAt: new Date().toDateString(),
  description: '',
  status: TODO,
};
function Form(props) {
  const { createTask, updateTask, task } = props;
  const [formValue, setFormValue] = useState(defaultValue);
  useEffect(() => {
    if (task) {
      setFormValue(task);
    }
  }, [task]);
  const onChangeValue = key => event => {
    setFormValue({ ...formValue, [key]: event.target.value });
  };
  const createNewTask = e => {
    e.preventDefault();
    if (task) {
      updateTask(formValue);
    } else {
      createTask({ ...formValue, id: uuidv4(), status: TODO });
    }
    setFormValue(defaultValue);
  };
  return (
    <FormContainer>
      <form>
        <div className='form-item'>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' value={formValue.title} onChange={onChangeValue('title')} />
        </div>
        <div className='form-item'>
          <label htmlFor='creator'>Creator</label>
          <input
            type='text'
            id='creator'
            value={formValue.creator}
            onChange={onChangeValue('creator')}
          />
        </div>
        <div className='form-item'>
          <label htmlFor='createAt'>Create at</label>
          <input type='text' id='createAt' disabled value={formValue.createAt} />
        </div>
        <div className='form-item'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            id='description'
            value={formValue.description}
            onChange={onChangeValue('description')}
          />
        </div>
        <div className='status-list'>
          {task &&
            STATUS_LIST.map(status => (
              <div className='status-item' key={status}>
                <input
                  type='radio'
                  name='status'
                  value={status}
                  id={status}
                  checked={formValue.status == status}
                  onClick={onChangeValue('status')}
                />
                <label htmlFor={status}>{status}</label>
              </div>
            ))}
        </div>

        <div className='form-btn'>
          <Button onClick={createNewTask}>{task ? 'update' : 'save'}</Button>
        </div>
      </form>
    </FormContainer>
  );
}

export default Form;

const FormContainer = styled.div`
  width: 400px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  .form-item {
    display: flex;
    margin: 10px 0;
  }
  label {
    width: 30%;
  }
  input {
    border: none;
    border-bottom: 1px solid;
    width: 70%;
    &:focus {
      outline: none;
    }
  }
  .form-btn {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .status-list {
    display: flex;
  }
  .status-item {
    display: flex;
    margin-right: 20px;
    margin-bottom: 20px;
    label {
      width: 100%;
      padding-left: 10px;
    }
  }
`;
