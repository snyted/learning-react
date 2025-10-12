import { useState, type ChangeEvent } from "react";
import { textToUpperCase } from "./utils/textToUpperCase";

export default function InputControlled() {
  const [inputValue, setInputValue] = useState<string>("");
  const [textFromButton, setTextFromButton] = useState<string>("");

  return (
    <div className="flex flex-col mx-auto w-2/3 gap-3 relative top-4">
      <input
        className="bg-neutral-300 rounded-sm h-10 p-1"
        type="text"
        name="controlledInput"
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.currentTarget.value)
        }
      ></input>

      {inputValue ? (
        ""
      ) : (
        <p className="text-red-500 font-bold text-center">
          Digite algo no input
        </p>
      )}
      <button
        type="submit"
        disabled={!inputValue}
        aria-disabled={!inputValue}
        className={`${
          !inputValue ? "bg-neutral-500" : "bg-emerald-600 hover:bg-emerald-700"
        }  w-1/5 self-center p-1 text-white cursor-pointer transition-all duration-300`}
        onClick={() => {
          setTextFromButton(inputValue);
          setInputValue("");
        }}
      >
        Enviar
      </button>

      {textFromButton && (
        <p id="FinalMessage"><span className="text-red-600 font-bold">Enviado com sucesso:</span> {textToUpperCase(textFromButton)}</p>
      )}

    </div>
  );
}
