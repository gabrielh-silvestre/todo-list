import { ReactChild } from "react";
import { ButtonContainer } from "./styles";

export interface TaskDetailButtonProps {
  action: 'save' | 'cancel';
  children: ReactChild;
}

export function TaskDetailButton({ action, children }: TaskDetailButtonProps) {
  return (
    <ButtonContainer $action={action}>
      {children}
    </ButtonContainer>
  )
}
