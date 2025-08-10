import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TodoCard from "./TodoCard";

const ViewTodos = ({ tasks, updateTask, deleteTask }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "lightgray",
        alignItems: "center",
        minWidth: "400px",
        border: "1px solid blue",
        borderRadius: "2rem",
        margin: "2rem",
        padding: "1.2rem",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textTransform: "capitalize",
          marginBottom: "1rem",
        }}
      >
        All todos
      </Typography>
      <Box
        sx={{
          backgroundColor: "white",
          minWidth: "375px",
          padding: "2rem",
          borderRadius: "1.2rem",
        }}
      >
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TodoCard
              key={task.id}
              task={task}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          ))
        ) : (
          <Typography>No todos yet</Typography>
        )}
      </Box>
    </Box>
  );
};

export default ViewTodos;
