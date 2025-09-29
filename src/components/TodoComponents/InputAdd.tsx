import { useState } from "react";

interface IInputAddProps {
  onAdd(value: string): void;
}
export const InputAdd = (props: IInputAddProps) => {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    props.onAdd(value);
    setValue("");
  };

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-neutral-500 border-solid border-1 rounded-md p-1 m-2"
      />

      <button onClick={handleAdd} className="p-2 bg-sky-500">Adicionar</button>
    </div>
  );
};
