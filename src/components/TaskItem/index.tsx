import { Container, TaskDescription, TaskTitle } from './syles';

interface TaskItemProps {
  title: string;
  description?: string;
}

export function TaskItem({ title, description }: TaskItemProps) {
  return (
    <Container>
      <TaskTitle>{title}</TaskTitle>

      <TaskDescription>
        {description ? description : 'Descrição'}
      </TaskDescription>
    </Container>
  );
}
