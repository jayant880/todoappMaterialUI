import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const TodoCard = ({ task }) => {
  const [taskCompleted, setTaskCompleted] = useState(task.isCompleted);
  const handleChange = () => {
    setTaskCompleted(!taskCompleted);
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
      <Typography>{task.task}</Typography>
      <Box
        sx={{
          display: "flex",
          gap: "5px",
        }}
      >
        <Checkbox checked={taskCompleted} onChange={handleChange} />
        <Button variant="contained">Edit</Button>
        <Button variant="contained">Delete</Button>
      </Box>
    </Box>
  );
};

export default TodoCard;
