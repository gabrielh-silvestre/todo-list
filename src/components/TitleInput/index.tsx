import { Input } from './styles';

export function TitleInput() {
  return (
    <label htmlFor="taskTitle">
      <Input id="taskTitle" type="text" value="Título" />
    </label>
  );
}
