import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const TodoCard = ({ task, updateTask }) => {
  const [taskCompleted, setTaskCompleted] = useState(task.isCompleted);
  const [ttask, setTTask] = useState(task.task);
  const [editMode, setEditMode] = useState(false);
  const handleCheckBox = () => {
    setTaskCompleted(!taskCompleted);
    const newTask = {
      id: task.id,
      task: task.task,
      isCompleted: !task.isCompleted,
    };
    updateTask(task.id, newTask);
  };

  const handleChange = (e) => {};

  const handleSave = () => {
    if (ttask.trim() === "") return;
    setEditMode(!editMode);
    const newTask = {
      id: task.id,
      task: ttask,
      isCompleted: task.isCompleted,
    };
    updateTask(task.id, newTask);
  };

  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        margin: "0.5rem 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {editMode ? (
        <TextField
          variant="standard"
          value={ttask}
          onDoubleClick={handleSave}
          onChange={(e) => setTTask(e.target.value)}
        />
      ) : (
        <Typography onDoubleClick={() => setEditMode(!editMode)}>
          {ttask}
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          gap: "5px",
        }}
      >
        <Checkbox checked={taskCompleted} onChange={handleCheckBox} />
        <Button variant="contained">Delete</Button>
      </Box>
    </Box>
  );
};

export default TodoCard;
