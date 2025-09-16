import { useState } from "react";

const NameList = () => {
  const [names, setName] = useState<string[]>([
    "João",
    "Maria",
    "Ana",
    "Pedro",
    "Lucas",
    "Beatriz",
  ]);

  const [inputName, setInputName] = useState<string>("");

  function formatName(name: string): string {
    return name
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function addName(): void {
    if (
      !names.map((n) => formatName(n)).includes(formatName(inputName)) &&
      !inputName.trim()
    ) {
      setName([...names, inputName]);
      setInputName("");
    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center gap-3 justify-center text-center">
      <h1 className="text-xl">Adicione nomes a lista.</h1>
      <input
        className="w-full max-w-[300px] p-2 h-10 rounded-2xl bg-neutral-800 text-white block"
        type="text"
        placeholder="Digite um novo nome"
        value={inputName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputName(e.target.value);
          console.log(inputName);
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key == "Enter" && addName()}
      />
      <ul
        className="max-h-1/3 p-2 overflow-auto [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-black
  dark:[&::-webkit-scrollbar-thumb]:bg-white"
      >
        {names.map((name, i) => {
          return (
            <li key={i}>
              <span className="font-bold">{i + 1}</span>:{name}
            </li>
          );
        })}
      </ul>
      <button className="bg-blue-600 rounded-2xl p-1" onClick={addName}>
        Adicionar nome
      </button>
    </div>
  );
};

export default NameList;
