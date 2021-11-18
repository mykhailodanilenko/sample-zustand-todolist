import React, { useCallback, useState } from "react";
import "./AddForm.scss";
import { useStore } from "../../zustand";

function AddForm() {
  const addTodo = useStore((state) => state.addTodo);
  const [value, setValue] = useState("");
  const submitHandler = useCallback(
    (event) => {
      event.preventDefault();
      addTodo({ text: value });
      setValue("");
    },
    [addTodo, value]
  );
  return (
    <form className="form-container" onSubmit={(e) => submitHandler(e)}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <button>Add todo</button>
    </form>
  );
}

export default AddForm;
