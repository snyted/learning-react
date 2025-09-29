import { FiEdit, FiTrash } from "react-icons/fi";

type NameItemProps = {
  name: string;
  index: number;
  onRemove: (i: number) => void;
};

export const NameItem = ({ name, index, onRemove }: NameItemProps) => {
  return (
    <li className="flex text-center gap-15 items-center">
      
      <div>
        <span className="font-bold mr-2">{index + 1}.</span>
        <span>{name}</span>
      </div>

      <div className="flex gap-2 ml-auto">
        <button
          onClick={() => onRemove(index)}
          aria-label={`Remover ${name}`}
          className="hover:text-red-500 transition-all duration-300 cursor-pointer"
        >
          <FiTrash />
        </button>
        <button
          onClick={() => null}
          className="hover:text-sky-700 transition-all duration-300 cursor-pointer"
        >
          <FiEdit />
        </button>
      </div>

    </li>
  );
};
