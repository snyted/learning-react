interface TodoItemProps {
  id: number;
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
}: TodoItemProps) => {
  return (
    <li key={id} className={`${complete ? "bg-green-600" : "bg-neutral-400"}`}>
      {label}
      <button onClick={onComplete} className="bg-emerald-700 p-2">
        Concluir
      </button>
      <button onClick={onRemove} className="bg-red-700 p-2 ml-2">
        Remover
      </button>
    </li>
  );
};
