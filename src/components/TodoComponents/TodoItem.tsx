interface ITodoItemProps {
  id: string;
  label: string;
  complete: boolean;

  onRemove(): void;
  onComplete(): void;
}
export const TodoItem = ({
  id,
  label,
  complete,
  onComplete,
  onRemove,
}: ITodoItemProps) => {
  return (
    <li key={id}>
      {label}

      {complete ? "Concluído" : ""}

      <button onClick={onComplete} className="bg-emerald-700 p-2">Concluir</button>
      <button onClick={onRemove} className="bg-red-700 p-2 ml-2">
        Remover
      </button>
    </li>
  );
};
