import { useState } from "react";

import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodosList from "./components/TodosList";

import "./styles/main.css";

function App() {
  const [todosData, setTodosData] = useState([
    {
      id: 1,
      title: "Watch a movie",
      done: false,
    },
    {
      id: 2,
      title: "Buy a movie",
      done: true,
    },
    {
      id: 3,
      title: "Sell a movie",
      done: false,
    },
  ]);

  const handleSaveTodo = (newTitle) => {
    const newData = {
      id: todosData.length + 1,
      title: newTitle,
      done: false,
    };

    setTodosData([...todosData, newData]);
  };

  const updateTodoStatus = (id, status) => {
    const selectedTodo = todosData.find((todo) => todo.id === id);

    selectedTodo.done = status;

    const updatedTodosData = todosData.filter((todo) => todo.id !== id);

    setTodosData([...updatedTodosData, selectedTodo]);
  };

  const removeTodo = (todoId) => {
    const remainingtodosData = todosData.filter((todo) => todo.id !== todoId);

    setTodosData(remainingtodosData);
  };

  return (
    <main className="main-wrapper">
      <div className="todo-container">
        <TodoHeader />
        <TodoInput handleSaveTodo={handleSaveTodo} />
        <TodosList
          data={todosData}
          updateTodoStatus={updateTodoStatus}
          removeTodo={removeTodo}
        />
      </div>
    </main>
  );
}

export default App;
