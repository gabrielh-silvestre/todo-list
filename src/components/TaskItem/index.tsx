import { useDispatch } from 'react-redux';

import { toggleComplete } from '../../slice';
import { DeleteButton } from '../DeleteButton';
import { Container, TaskDescription, TaskDone, TaskTitle } from './syles';

interface TaskItemProps {
  taskId: string;
  title: string;
  description?: string;
  isDone: boolean;
}

export function TaskItem({ title, description, isDone, taskId }: TaskItemProps) {
  const dispatch = useDispatch();

  return (
    <Container>
      <div>
        <TaskTitle>{title}</TaskTitle>

        <TaskDescription>
          {description ? description : 'Descrição'}
        </TaskDescription>
      </div>

      <div>
        <TaskDone
          $isDone={isDone}
          onClick={() => {
            dispatch(toggleComplete({ taskId, isDone }));
          }}
        />
      </div>

      <DeleteButton taskId={taskId} />
    </Container>
  );
}
