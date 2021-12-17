import { Container, CreateTaskButton, Input } from "./styles";

export function InputTask() {
  return (
    <Container>
      <label htmlFor="inputTask">
        <Input type="text" name="inputTask" id="inputTask" />
      </label>

      <CreateTaskButton type="button">Criar</CreateTaskButton>
    </Container>
  )
}
