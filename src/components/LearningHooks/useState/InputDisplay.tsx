import { useRef, useState } from "react";

export const InputDisplay = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [showText, setShowText] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputValue);
  return (
    <>
      <label htmlFor="input">
        <input
          type="text"
          ref={inputRef}
          className="bg-black p-2 rounded-2xl"
          placeholder="Digite algo aqui"
          value={inputValue}
          onChange={(e): void => setInputValue(e.target.value)}
        />
      </label>
      <button
        className="bg-red-500 p-2 rounded-md hover:bg-red-800 cursor-pointer"
        onClick={(): void => {
          if (inputValue == "") return;
          setShowText((prev) => [...prev, inputValue]);
          setInputValue("");
          inputRef.current?.focus();
        }}
      >
        Adicionar
      </button>
      <div className="bg-neutral-800 p-3 rounded-md ">
        {showText.map((texto: string, i: number) => (
          <p key={i} className="w-full flex justify-between gap-10 mt-2 text-center items-center">
            {texto}
            <div className="flex gap-2">
              <button
                className="bg-red-500 hover:bg-red-700 p-1 rounded-sm cursor-pointer"
                onClick={(): void =>
                  setShowText((prev: string[]) =>
                    prev.filter((_, index) => i !== index)
                  )
                }
              >
                Deletar
              </button>
              <button className="bg-sky-600 hover:bg-sky-700 p-2 rounded-sm cursor-pointer">Editar</button>
            </div>
          </p>
        ))}
      </div>
    </>
  );
};
