import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import { TaskItem } from '../TaskItem';
import { Container } from './styles';

export default function TaskList() {
  const tasks = useSelector((state: RootState) => state.taskReducer.tasks);

  return (
    <Container>
      {tasks.map((task, i) => (
        <TaskItem
          key={i}
          taskId={i}
          title={task.title}
          isDone={task.isDone ? true : false}
        />
      ))}
    </Container>
  );
}
