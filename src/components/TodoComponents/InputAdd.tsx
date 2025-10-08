import { useRef, useState } from "react";

interface InputAddProps {
  onAdd(value: string): void;
}
export const InputAdd = (props: InputAddProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  const handleAdd = () => {
    props.onAdd(value);
    setValue("");
    inputRef.current?.focus();
  };

  return (
    <div className="w-full flex gap-10 text-white">
      <input
        value={value}
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
        className="bg-neutral-200 border-none rounded-md h-11 w-5/6 placeholder:text-neutral-500 p-2 text-black"
        placeholder="O que você precisa fazer?"
        type="text"
        name="todo"
        id="todo"
      />

      <button onClick={handleAdd} className="p-2 bg-linear-to-r from-cyan-500 to-blue-500 cursor-pointer">
        Adicionar
      </button>
    </div>
  );
};
