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

  const updateTask = (id, updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      return task.id === id ? { ...updatedTask } : task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTasks(updatedTask);
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
      <ViewTodos
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </Box>
  );
};

export default App;
