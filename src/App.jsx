import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import { TodoProvider } from "./Context/todoContext";
import TodoItems from "./components/TodoItems";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todo");
    return stored ? JSON.parse(stored) : [];
  });

  const addTodo = (todo) => {
    if (todo.todo) setTodos((prev) => [...prev, todo]);
  };

  const updateTodo = (todo, id) => {
    setTodos((prev) => prev.map((e) => (e.id === id ? todo : e)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((e) => e.id !== id));
  };

  const checkCompleted = (id) => {
    setTodos((prev) =>
      prev.map((e) => (e.id === id ? { ...e, isCompleted: !e.isCompleted } : e))
    );
  };
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex items-center bg-blue-950 justify-center flex-col h-screen">
      <TodoProvider
        value={{
          setTodos,
          todos,
          addTodo,
          deleteTodo,
          updateTodo,
          checkCompleted,
        }}
      >
        <div className="h-[15%] -mb-8 flex items-center justify-center w-190">
          <TodoForm />
        </div>
        <div className="h-[80%] mr-25 w-md mt-10">
          {todos.map((todo) => (
            <div key={todo.id} className="w-full">
              <TodoItems todo={todo} />
            </div>
          ))}
        </div>
      </TodoProvider>
    </div>
  );
};

export default App;
