import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { toggleComplete } from '../../slice';
import { DeleteButton } from '../DeleteButton';
import { TaskModal } from '../TaskModal';
import Modal from 'react-modal';

import { Container, TaskDescription, TaskDone, TaskTitle } from './syles';

interface TaskItemProps {
  taskId: string;
  title: string;
  description?: string;
  isDone: boolean;
}

export function TaskItem({
  title,
  description,
  isDone,
  taskId,
}: TaskItemProps) {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openTaskModal = () => {
    setIsTaskModalOpen(true);
  };

  const closeTaskModal = () => {
    setIsTaskModalOpen(false);
  };

  return (
    <Container>
      <div onClick={openTaskModal}>
        <TaskTitle $isDone={isDone}>{title}</TaskTitle>

        <TaskDescription>
          {description ? description : 'Descrição...'}
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

      <Modal
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        isOpen={isTaskModalOpen}
        onRequestClose={closeTaskModal}
      >
        <TaskModal taskId={taskId} title={title} description={description} closeModal={closeTaskModal} />
      </Modal>
    </Container>
  );
}
