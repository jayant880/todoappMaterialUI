import { useState } from "react";

import TodoForm from "./components/TodoForm";
import ViewTodos from "./components/ViewTodos";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...updatedTask } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <Typography variant="h2" gutterBottom>
        Todo List
      </Typography>
      <TodoForm addTask={addTask} />
      <ViewTodos
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </Box>
  );
};

export default App;
