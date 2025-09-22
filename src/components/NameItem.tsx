import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

type NameItemProps = {
  name: string;
  index: number;
  newName: string;
  onRemove: (i: number) => void;
  onEdit: (i: number, newName: string) => void;
};

export const NameItem = ({
  name,
  index,
  onRemove,
  onEdit,
}: NameItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(name);

  return (
    <li className="flex text-center gap-15 items-center">
      <div>
        <span className="font-bold mr-2">{index + 1}.</span>
        {isEditing ? (
          <input
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onEdit(index, tempName); // avisa o NameList
                setIsEditing(false);
              }
              if (e.key === "Escape") {
                setTempName(name); // cancela
                setIsEditing(false);
              }
            }}
            autoFocus
          />
        ) : (
          <span>{name}</span>
        )}
      </div>
      <div className="flex gap-2 ml-auto">
        <button
          onClick={() => onRemove(index)}
          aria-label={`Remover ${name}`}
          className="hover:text-red-500 transition-all duration-300 cursor-pointer"
        >
          <FiTrash />
        </button>
        <button onClick={() => setIsEditing(true)}
          className="hover:text-sky-700 transition-all duration-300 cursor-pointer">
          <FiEdit />
        </button>
      </div>
    </li>
  );
};
