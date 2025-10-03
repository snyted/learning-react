import { useState, useEffect } from "react";

import { InputAdd } from "../components/TodoComponents/InputAdd";
import { TodoItem } from "../components/TodoComponents/TodoItem";
import { List } from "../components/TodoComponents/List";

import { TodoAPI, type ITodo } from "../shared/services/api/TodoAPI";

export function TodoList() {
  const [list, setList] = useState<ITodo[]>([]);

  useEffect(() => {
    TodoAPI.getAll().then((data) => setList(data));
  }, []);

  const handleAdd = (value: string) => {
    TodoAPI.create({ label: value, complete: false }).then((data) =>
      setList([...list, data])
    );
  };

  const handleRemove = (id: number) => {
    TodoAPI.deleteById(id).then(() => {
      setList([...list.filter((item) => item.id !== id)]);
    });
  };

  const handleComplete = (id: number) => {
    TodoAPI.updateById(id, { complete: true }).then(() => {
      setList(
        list.map((item) =>
          item.id === id ? { ...item, complete: true } : item
        )
      );
    });
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
