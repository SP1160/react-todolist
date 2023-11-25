import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";

const TaskEditor = ({ initialId }) => {
  const [taskData, setTaskData] = useState({ name: "", priority: "1" });
  const [initialTask, setInitialTask] = useState();

  const getTaskById = async (taskId) => {
    try {
      const { data } = await axios.post("/api/getTaskById", { id: taskId });
      if (taskId === data.id) {
        setTaskData(data);
        setInitialTask(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (initialId) {
      getTaskById(initialId);
    }
  }, [initialId]);

  const changeTask = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitTask = async (e) => {
    e.preventDefault();
    try {
      if (taskData.name === "") {
        alert("Fill in the name field!");
      } else {
        if (initialTask) {
          await axios.post("/api/editTask", taskData);
        } else {
          await axios.post("/api/createTask", taskData);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cancelTask = () => {
    if (initialTask) {
      setTaskData(initialTask);
    } else {
      setTaskData({ name: "", priority: "1" });
    }
  };

  return (
    <Container className="w-50 mt-5">
      <Form onSubmit={submitTask}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter your task"
              name="name"
              value={taskData.name}
              onChange={changeTask}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} style={{ marginBottom: "6rem" }}>
          <Form.Label column sm="2">
            Priority
          </Form.Label>
          <Col sm="10">
            <Form.Select
              name="priority"
              value={taskData.priority}
              onChange={changeTask}
              aria-label="Priority"
            >
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <div className="d-flex justify-content-center gap-3">
          <Button className="w-25" variant="success" type="submit" data-testid="btn-ok">
            OK
          </Button>
          <Button
            className="w-25"
            variant="secondary"
            data-testid="btn-cancel"
            onClick={cancelTask}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default TaskEditor;
