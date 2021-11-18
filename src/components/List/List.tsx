import React, { useCallback } from "react";
import "./List.scss";
import AddForm from "../AddForm/AddForm";
import { useStore } from "../../zustand";
import ListItem from "../ListItem/ListItem";
import { todoInterface } from "../../types/todos";

function List() {
  const todos = useStore((state) => state.todos);
  const mapTodos = useCallback((list) => {
    return list.map((item: todoInterface, index: number) => (
      <ListItem key={index} text={item.text} />
    ));
  }, []);
  return (
    <div>
      <h1 className="header">Todolist</h1>
      <AddForm />
      {mapTodos(todos)}
    </div>
  );
}

export default List;
