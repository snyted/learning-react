import { createServer, Model } from "miragejs";

createServer({
  models: {
    todos: Model,
  },

  routes() {
    this.namespace = "api";

    this.get("/todos", (schema) => {
      return schema.all("todos");
    });

    this.get("/todos:id", (schema, req) => {
      const id = req.params.id;
      return schema.find("todos", id);
    });

    this.post("/todos/:id", (schema, req) => {
      const attrs = JSON.parse(req.requestBody);
      const todo = schema.create("todos", attrs);
      return todo;
    });

    this.put("/todos/:id", (schema, req) => {
      const id = req.params.id;

      const newAttrs = JSON.parse(req.requestBody);

      const todo = schema.find("todos", id);
      todo?.update(newAttrs);
      return {};
    });

    this.delete("/todos/:id", (schema, req) => {
      const id = req.params.id;

      const todo = schema.find("todos", id);
      todo?.destroy();
      return {};
    });
  },
});
