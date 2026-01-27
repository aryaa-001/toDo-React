import React from "react";
import useTodo from "../Context/todoContext";
import { useState } from "react";

const TodoItems = ({ todo }) => {
  const { updateTodo, deleteTodo, checkCompleted } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  return (
    <div
      className={`mt-3 rounded-xl bg-green-300 transition-all duration-200 ease-in-out py-2 flex gap-20 pl-5 ${
        todo.isCompleted ? "bg-green-300" : "bg-pink-200"
      }`}
    >
      <div className="flex gap-10">
        <input
          className="cursor-pointer"
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => {
            checkCompleted(todo.id);
          }}
        />
        <input
          type="text"
          className={`border-2 font-mono outline-0${
            todo.isCompleted ? "cursor-not-allowed line-through opacity-50" : ""
          } ${isEditing ? "border-2" : "border-transparent"} `}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isEditing}
        />
      </div>
      <div className="ml-10 flex gap-3">
        <button
          disabled={todo.isCompleted}
          onClick={() => {
            if (isEditing) {
              updateTodo({ ...todo, todo: todoMsg }, todo.id);
              setIsEditing(false);
            } else setIsEditing((prev) => !prev);
          }}
          className={`${todo.isCompleted ? "opacity-50" : "cursor-pointer"}`}
        >
          {isEditing ? "📂" : "✏️"}
        </button>
        <button
          className="cursor-pointer"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default TodoItems;
