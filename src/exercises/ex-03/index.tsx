import { useState } from "react";

export default function ShowHideComponent() {
    const [isVisible, setIsVisible] = useState<boolean>(true)
  return (
    <div className="text-2xl w-100 mx-auto space-y-1 flex flex-col items-center">
      <div className={`${isVisible ? 'block' : 'hidden'} w-50 h-50 bg-sky-600`}></div>
      <button className="bg-red-600 cursor-pointer text-white rounded-xl p-1 hover:bg-red-700"
      onClick={() => setIsVisible(prev => !prev)}>Clicar</button>
    </div>
  );
}
