import { useRef } from "react";

export const Timer = () => {
  const timerInterval = useRef<NodeJS.Timeout | null>(null);
  const timer = useRef(0);

  const handleInit = () => {
    
    console.log("Iniciou");
    timerInterval.current = setInterval(() => {
      console.log(timer.current++);
    }, 1000);
  };

  const handleStop = () => {
    if (timerInterval.current) {
      clearInterval(timerInterval.current as unknown as number);
    }
    console.log("Parou");
  };

  return (
    <div>
      <button onClick={handleInit} className="bg-blue-500 p-1 rounded-md">
        Iniciar
      </button>
      <button onClick={handleStop} className="bg-red-500 p-1 rounded-md">
        Parar
      </button>
    </div>
  );
};
