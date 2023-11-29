import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ListGroup, Button, Container } from "react-bootstrap";
import axios from "axios";

const TaskList = ({ onHandleAddTask, onHandleEditTask }) => {
  const [tasks, setTasks] = useState([]);

  const handleAddTaskClick = () => {
    onHandleAddTask();
  };

  const handleEditTaskClick = (id) => {
    onHandleEditTask(id);
  };

  const getTasks = async () => {
    try {
      const { data } = await axios.post("/api/getTaskList");
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deteleTask = async (id) => {
    if (confirm("Do you really want to delete it?")) {
      try {
        await axios.post("/api/deleteTask", { id });
        getTasks();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const completeTask = async (id) => {
    try {
      await axios.post("/api/completeTask", { id });
      getTasks();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Container className="w-50 mt-5">
      <ListGroup>
        {tasks.map((item) => (
          <ListGroup.Item
            key={item.id}
            className="d-flex align-items-center"
            variant={`${item.isCompleted ? "secondary" : ""}`}
          >
            <span className="flex-grow-1">{item.name}</span>
            <div className="d-flex p-3 gap-3">
              <Button
                data-testid="btn-delete"
                variant="link"
                className="d-flex align-items-center text-decoration-none p-0"
                onClick={() => deteleTask(item.id)}
              >
                <i className="fa-solid fa-xmark fa-xl text-danger" />
              </Button>
              <Button
                data-testid="btn-edit"
                variant="link"
                className="d-flex align-items-center text-decoration-none p-0"
                onClick={() => handleEditTaskClick(item.id)}
              >
                <i className="fa-solid fa-pen" />
              </Button>
              <Button
                data-testid="btn-complete"
                variant="link"
                className="d-flex align-items-center text-decoration-none p-0"
                onClick={() => completeTask(item.id)}
              >
                <i className="fa-solid fa-check fa-xl text-success" />
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button className="mt-2 w-100" variant="success" onClick={handleAddTaskClick}>
        Add Task
      </Button>
    </Container>
  );
};

export default TaskList;
