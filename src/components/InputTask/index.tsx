import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTask } from '../../slice';
import { RootState } from '../../store';

import { Container, CreateTaskButton, Input } from './styles';

export function InputTask() {
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector(({ taskReducer: { tasks } }: RootState) => tasks);

  const handleTaskTitle = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(value);
  };

  const createNewTask = () => {
    dispatch(
      addTask({ taskId: tasks.length, title: taskTitle, isDone: false })
    );
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
