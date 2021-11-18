import create from "zustand";
import { todoInterface } from "../types/todos";

export interface defaultStateInterface {
  todos: todoInterface[];
}

export interface rootState {
  todos: todoInterface[];
  addTodo: (newTodo: todoInterface) => void;
}

const defaultState: defaultStateInterface = {
  todos: [{ text: "" }],
};

export const useStore = create<rootState>((set) => {
  return {
    ...defaultState,
    addTodo: (newTodo: todoInterface) =>
      set((state: rootState) => {
        return { ...state, todos: state.todos.concat(newTodo) };
      }),
  };
});
