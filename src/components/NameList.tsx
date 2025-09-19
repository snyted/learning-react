import { useRef, useState } from "react";
import { FiTrash } from "react-icons/fi";

const NameList = () => {
  const [names, setName] = useState<string[]>([]);
  const [isDuplicateMessage, setIsDuplicateMessage] = useState<boolean>(false);
  const [inputName, setInputName] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  function formatName(name: string): string {
    return name
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function addName(): void {
    if (inputName.trim() === "") return;

    setName((prevNames) => {
      if (isDuplicate(prevNames, inputName)) {
        setIsDuplicateMessage(true);
        return prevNames;
      }
      setIsDuplicateMessage(false);
      return [...prevNames, inputName];
    });

    setInputName("");
    inputRef.current?.focus();
  }

  function isDuplicate(list: string[], name: string): boolean {
    return list.map(formatName).includes(formatName(name));
  }

  function removeName(index: number): void {
    setName((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="w-full h-full flex flex-col items-center gap-3 text-center">
      <h1 className="text-xl">Adicione nomes a lista.</h1>
      <input
        className="w-full max-w-[300px] p-2 h-10 rounded-2xl bg-neutral-800 text-white block"
        type="text"
        placeholder="Digite um novo nome"
        value={inputName}
        ref={inputRef}
        maxLength={10}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputName(e.target.value);
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
          e.key == "Enter" && addName()
        }
      />
      <p
        className={` text-red-600 transition-all ${
          isDuplicateMessage ? "block" : "hidden"
        }`}
      >
        Esse nome já está na lista.
      </p>
      <ul className="flex flex-col">
        {names.map((name, i) => {
          return (
            <li key={i} className="flex w-[150px] text-center">
              <span className="font-bold">{i + 1}</span>:{name}
              <button
                key={i}
                onClick={() => removeName(i)}
                className="ml-auto self-end hover:text-red-600 transition-all duration-300"
              >
                <FiTrash />
              </button>
            </li>
          );
        })}
      </ul>
      <button
        className={`p-1 rounded-b-md transition-colors duration-700
        ${
          inputName.trim()
            ? "bg-blue-500 hover:bg-blue-800 cursor-pointer transition-all"
            : "bg-neutral-800 cursor-not-allowed"
        }`}
        disabled={!inputName.trim()}
        onClick={addName}
      >
        Adicionar nome
      </button>
    </div>
  );
};

export default NameList;
