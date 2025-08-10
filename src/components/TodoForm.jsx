import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Add from "@mui/icons-material/Add";

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          mb: "2rem",
        }}
      >
        <TextField
          variant="outlined"
          label="Add new todo"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          size="small"
        />
        <Button
          type="submit"
          variant="contained"
          startIcon={<Add />}
          size="large"
        >
          Add
        </Button>
      </Box>
    </form>
  );
};

export default TodoForm;
