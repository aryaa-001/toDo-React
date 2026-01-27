import React, { useState } from "react";
import useTodo from "../Context/todoContext";

const TodoForm = () => {
  const [inputItem, setInputItem] = useState("");

  const { addTodo } = useTodo();

  return (
    <div className="flex w-full">
      <form
        className="w-full"
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({
            id: Date.now(),
            todo: inputItem,
            isCompleted: false,
          });
          setInputItem("");
        }}
      >
        <input
          onChange={(e) => {
            setInputItem(e.target.value);
          }}
          className="w-[80%] py-2 rounded-xl border-2 outline-0 px-3 bg-white "
          value={inputItem}
          type="text"
          placeholder="Add your task..."
        />
        <button className="bg-green-400 cursor-pointer text-white font-bold -ml-15 border-l-2 h-10 rounded-r-xl border-black w-20">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
