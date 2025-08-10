import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoCard = ({ task, updateTask, deleteTask }) => {
  const [editedText, setEditedText] = useState(task.task);
  const [editMode, setEditMode] = useState(false);

  const handleSave = () => {
    if (editedText.trim() === "") return;
    updateTask(task.id, { ...task, task: editedText });
    setEditMode(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
        backgroundColor: "white",
        borderRadius: "4px",
        boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
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
