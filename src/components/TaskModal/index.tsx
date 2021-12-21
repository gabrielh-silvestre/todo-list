import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { attTask } from '../../slice';

import {
  ModalButton,
  ButtonsContainer,
  DescriptionText,
  InfoContainer,
  InputContainer,
  TitleInput,
} from './styles';

interface TaskModalProps {
  taskId: string;
  title: string;
  description?: string;
  closeModal: () => void;
}

type TaskModalData = Omit<TaskModalProps, 'closeModal'>;

export function TaskModal({
  taskId,
  title,
  description,
  closeModal,
}: TaskModalProps) {
  const dispatch = useDispatch();
  const [selectedTask, setSelectedTask] = useState<TaskModalData>({
    taskId,
    title,
    description,
  });

  const handleTitleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTask({ ...selectedTask, title: value });
  };

  const handleDescriptionChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSelectedTask({ ...selectedTask, description: value });
  };

  return (
    <>
      <InfoContainer>
        <InputContainer htmlFor="taskTitle">
          <TitleInput
            id="taskTitle"
            type="text"
            value={selectedTask.title}
            onChange={handleTitleChange}
          />
        </InputContainer>

        <InputContainer className="w-full" htmlFor="taskDescription">
          <DescriptionText
            id="taskDescription"
            placeholder="Descrição..."
            value={selectedTask.description}
            onChange={handleDescriptionChange}
          />
        </InputContainer>
      </InfoContainer>

      <ButtonsContainer>
        <ModalButton $action="cancel" onClick={closeModal}>
          Cancelar
        </ModalButton>

        <ModalButton
          $action="save"
          onClick={() => {
            dispatch(attTask(selectedTask));
            closeModal();
          }}
        >
          Salvar
        </ModalButton>
      </ButtonsContainer>
    </>
  );
}
