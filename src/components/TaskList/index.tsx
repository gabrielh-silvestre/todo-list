import { TaskItem } from '../TaskItem';
import { Container } from './styles';

export default function TaskList() {
  return (
    <Container>
      <TaskItem title="Título 1" />
      <TaskItem title="Título 2" />
      <TaskItem title="Título 3" />
      <TaskItem title="Título 4" />
    </Container>
  );
}
