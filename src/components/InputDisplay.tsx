import { useState } from "react";

export const InputDisplay = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [showText, setShowText] = useState<string[]>([]);

  console.log(showText);
  return (
    <>
      <label htmlFor="input">
        <input
          type="text"
          placeholder="Digite algo aqui"
          onChange={(e): void => setInputValue(e.currentTarget.value)}
        />
      </label>
      <button
        className="bg-red-500 p-2 rounded-md hover:bg-red-800 cursor-pointer"
        onClick={(): void => setShowText((prev) => [...prev, inputValue])}
      >
        Mostrar texto digitado
      </button>
      {showText.map((texto) => (
        <p>{texto}</p>
      ))}
    </>
  );
};
