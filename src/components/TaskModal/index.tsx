import { TaskDetailButton } from '../TaskDetailButton';

import {
  ButtonsContainer,
  ContentContainer,
  DescriptionText,
  InfoContainer,
  InputContainer,
  TitleInput,
} from './styles';

export function TaskModal() {
  return (
    <ContentContainer>
      <InfoContainer>
        <InputContainer htmlFor="taskTitle">
          <TitleInput id="taskTitle" type="text" value="Título" />
        </InputContainer>

        <InputContainer className='w-full' htmlFor="taskDescription">
          <DescriptionText id="taskDescription" placeholder="Descrição..." />
        </InputContainer>
      </InfoContainer>

      <ButtonsContainer>
        <TaskDetailButton action="cancel">Cancelar</TaskDetailButton>
        <TaskDetailButton action="save">Salvar</TaskDetailButton>
      </ButtonsContainer>
    </ContentContainer>
  );
}
