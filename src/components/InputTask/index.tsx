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

  const handleNewTask = () => {
    dispatch(addTask({ title: taskTitle }));
    setTaskTitle('');
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
        />
      </label>

      <CreateTaskButton type="button" onClick={handleNewTask}>
        Criar
      </CreateTaskButton>
    </Container>
  );
}
