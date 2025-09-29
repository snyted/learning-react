// Hooks
import { useRef, useState } from "react";

// Components
import { NameItem } from "./NameItem";
import { Warning } from "./Warning";

// Utils
import { isDuplicate } from "./../../assets/utils/isDuplicate";

const NameList = () => {
  const [names, setName] = useState<string[]>([]);
  const [isDuplicateMessage, setIsDuplicateMessage] = useState<boolean>(false);
  const [inputName, setInputName] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const isLimitReached: boolean = names.length >= 5;
  const isButtonDisable: boolean = isLimitReached || isDuplicateMessage;

  function addName(): void {
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
      <Warning
        className={` text-red-600 transition-all ${
          isDuplicateMessage ? "block" : "hidden"
        }`}
        text="Esse nome já foi adicionado."
      />
      <Warning
        className={`text-red-600 ${isLimitReached ? "block" : "hidden"}`}
        text="Limite de nomes atingido."
      />
      <ul>
        {names.map((name, i) => (
          <NameItem index={i} name={name} onRemove={removeName} />
        ))}
      </ul>

      <button
        className={`p-1 rounded-b-md transition-colors duration-700
        ${
          isButtonDisable
            ? "bg-neutral-800 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-800 cursor-pointer transition-all"
        }`}
        disabled={isButtonDisable}
        onClick={addName}
      >
        Adicionar nome
      </button>
    </div>
  );
};

export default NameList;
