interface ListItemProps {
  id: number;
  label: string;
  complete: boolean;

  onRemove(): void;
  onComplete(): void;
}
export const ListItem = ({
  id,
  label,
  complete,
  onComplete,
  onRemove,
}: ListItemProps) => {
  return (
    <div className="flex w-full">
      <li key={id} className={`${complete && "line-through"}`}>
        {label}
      </li>
      <div className="ml-auto">
        <button onClick={onComplete} className="bg-emerald-500 p-2 text-white cursor-pointer hover:bg-emerald-700 rounded-sm">
          Concluir
        </button>
        <button onClick={onRemove} className="bg-red-500 p-2 ml-2 text-white cursor-pointer hover:bg-red-700 rounded-sm">
          Remover
        </button>
      </div>
    </div>
  );
};
