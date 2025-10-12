import { useState } from "react";
import { ToggleItem } from "./ToggleItem";

export const VisibilityManager = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
        <ToggleItem isVisible={isVisible} title="Testando."/>
        <ToggleItem isVisible={!isVisible} title="Testando 2"/>
        <button className="bg-emerald-700 p-1 text-white" onClick={() => setIsVisible(prev => !prev)}>Mudar</button>
    </div>
  )
};
