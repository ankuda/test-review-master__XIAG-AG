interface InputNewTodoProps {
  todoTitle: string;
  onChange: (title: string) => void;
  onSubmit: (todo: { title: string; isDone: boolean }) => void;
}
