import { useState } from "react";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = {
      id: crypto.randomUUID(),
      task: task,
      isCompleted: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <div>
      <TodoForm addTask={addTask} />
    </div>
  );
};

export default App;
