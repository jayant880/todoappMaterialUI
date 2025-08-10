import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const TodoCard = ({ task, updateTask, deleteTask }) => {
  const [editedText, setEditedText] = useState(task.task);
  const [editMode, setEditMode] = useState(false);

  const handleSave = () => {
    if (editedText.trim() === "") return;
    setEditMode(false);
    updateTask(task.id, { ...task, task: editedText });
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
          value={editedText}
          onDoubleClick={handleSave}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <Typography onDoubleClick={() => setEditMode(!editMode)}>
          {editedText}
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          gap: "5px",
        }}
      >
        <Checkbox
          checked={task.isCompleted}
          onChange={() =>
            updateTask(task.id, { ...task, isCompleted: !task.isCompleted })
          }
        />
        <Button
          variant="contained"
          color="error"
          onClick={() => deleteTask(task.id)}
        >
          <DeleteIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default TodoCard;
