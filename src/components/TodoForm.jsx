import Add from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";

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
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          margin: "1.2rem",
          padding: "1.2rem",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Add Task
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            margin: "1.2rem",
            padding: "1.2rem",
          }}
        >
          <TextField
            variant="standard"
            label="Todo"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button type="submit" variant="contained" startIcon={<Add />}>
            Add Todo
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default TodoForm;
