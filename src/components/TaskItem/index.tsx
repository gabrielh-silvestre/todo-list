import { useDispatch } from 'react-redux';

import { toggleComplete } from '../../slice';
import { Container, TaskDescription, TaskTitle } from './syles';

interface TaskItemProps {
  title: string;
  description?: string;
  isDone: boolean;
}

export function TaskItem({ title, description, isDone }: TaskItemProps) {
  const dispatch = useDispatch();

  return (
    <Container>
      <TaskTitle>{title}</TaskTitle>

      <TaskDescription>
        {description ? description : 'Descrição'}
      </TaskDescription>

      <input
        type="radio"
        name="isDone"
        id="isDone"
        checked={isDone}
        onClick={() => {
          dispatch(toggleComplete({ title, description, isDone }));
        }}
      />
    </Container>
  );
}
