import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '../../slice';

import { Container, CreateTaskButton, Input } from './styles';

export function InputTask() {
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch();

  const handleTaskTitle = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(value);
  };

  const createNewTask = () => {
    dispatch(addTask({ title: taskTitle }));
    setTaskTitle('');
  };

  const handleUserType = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      createNewTask();
    }
  };

  return (
    <Container>
      <label htmlFor="inputTask">
        <Input
          type="text"
          name="inputTask"
          id="inputTask"
          value={taskTitle}
          onChange={handleTaskTitle}
          onKeyUp={handleUserType}
        />
      </label>

      <CreateTaskButton type="button" onClick={createNewTask}>
        Criar
      </CreateTaskButton>
    </Container>
  );
}
