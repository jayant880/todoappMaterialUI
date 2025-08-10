import TodoCard from "./TodoCard";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ViewTodos = ({ tasks, updateTask, deleteTask }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        p: "2rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        Your Tasks
      </Typography>

      {tasks.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {tasks.map((task) => (
            <TodoCard
              key={task.id}
              task={task}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          ))}
        </Box>
      ) : (
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          No tasks yet. Add one above!
        </Typography>
      )}
    </Box>
  );
};

export default ViewTodos;
