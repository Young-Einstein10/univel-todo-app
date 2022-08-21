import { useState } from "react";

function TodoInput({ handleSaveTodo }) {
  const [value, setvalue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    handleSaveTodo(value);

    setvalue("");

    // console.log(handleSaveTodo);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input-form">
      <input
        type="text"
        value={value}
        onChange={(event) => setvalue(event.target.value)}
        placeholder="Enter Todo Item"
      />
    </form>
  );
}

export default TodoInput;
