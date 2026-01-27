import { useContext, createContext } from "react";

export const todoContext = createContext();

export const TodoProvider = todoContext.Provider;

export default function useTodo() {
  return useContext(todoContext);
}
