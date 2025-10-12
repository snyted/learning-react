import { useState } from "react";

export const CharCount = () => {
  const [text, setText] = useState<string>("");
  const LIMIT = 50;
  const isLimitReached = text.length >= LIMIT;

  return (
    <div>
      <textarea
        name="inputText"
        id="inputText"
        maxLength={50}
        className={`${
          isLimitReached
            ? "bg-red-300 transition-colors duration-500"
            : "bg-green-600"
        }  p-1`}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <p>
        Caracteres digitados:
        <span className={isLimitReached ? "text-red-700" : "text-black"}>
          {text.length}
        </span>
      </p>
      <p>Caracteres restantes: {50 - text.length}</p>
    </div>
  );
};
