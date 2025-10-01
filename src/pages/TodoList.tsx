import { useState } from "react";

import { InputAdd } from "../components/TodoComponents/InputAdd";
import { TodoItem } from "../components/TodoComponents/TodoItem";
import { List } from "../components/TodoComponents/List";
import { TodoAPI } from "../shared/services/api/TodoAPI";

TodoAPI.getAll().then((data) => console.log("APP", data));

export function TodoList() {
  const [list, setList] = useState([
    { id: 1, label: "Fazer café", complete: false },
    { id: 2, label: "Fazer pilates", complete: false },
    { id: 3, label: "Fazer almoço", complete: false },
    { id: 4, label: "Fazer janta", complete: false },
    { id: 5, label:  "Comer merda", complete: false},
  ]);

  const handleAdd = (value: string) => {
    setList([...list, { id: list.length + 1, complete: false, label: value }]);
  };

  const handleRemove = (id: number) => {
    setList([...list.filter((item) => item.id !== id)]);
  };

  const handleComplete = (id: number) => {
    setList([
      ...list.map((item) => ({
        ...item,
        complete: item.id === id ? true : item.complete,
      })),
    ]);
  };
  return (
    <div>
      <InputAdd onAdd={handleAdd} />

      <List>
        {list.map((listItem) => (
          <TodoItem
            key={listItem.id}
            id={listItem.id}
            label={listItem.label}
            complete={listItem.complete}
            onRemove={() => handleRemove(listItem.id)}
            onComplete={() => handleComplete(listItem.id)}
          />
        ))}
      </List>
    </div>
  );
}
