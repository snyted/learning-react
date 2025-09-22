import { useState } from "react";

export const InputDisplay = () => {
  const [inputValue, setInputValue] = useState("");
  const [showText, setShowText] = useState("");
  return (
    <>
      <label htmlFor="input">
        <input
          type="text"
          placeholder="Digite algo aqui"
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
      </label>
      <button
        className="bg-red-500 p-2 rounded-md hover:bg-red-800 cursor-pointer"
        onClick={() => setShowText(inputValue)}
      >
        Mostrar texto digitado
      </button>
      <p>{showText}</p>
    </>
  );
};
