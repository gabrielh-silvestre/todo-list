import { TaskDetailButton } from '../TaskDetailButton';

import {
  ButtonsContainer,
  ContentContainer,
  InfoContainer,
  TitleInput,
} from './styles';

export function TaskModal() {
  return (
    <ContentContainer>
      <InfoContainer>
        <label htmlFor="taskTitle">
          <TitleInput id="taskTitle" type="text" value="Título" />
        </label>

        <textarea></textarea>
      </InfoContainer>

      <ButtonsContainer>
        <TaskDetailButton action="cancel">Cancelar</TaskDetailButton>
        <TaskDetailButton action="save">Salvar</TaskDetailButton>
      </ButtonsContainer>
    </ContentContainer>
  );
}
