import { useState } from "react";
import TodoForm from "./components/TodoForm";
import ViewTodos from "./components/ViewTodos";
import Box from "@mui/material/Box";
import "./style/main.css";

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TodoForm addTask={addTask} />
      <ViewTodos tasks={tasks} />
    </Box>
  );
};

export default App;
