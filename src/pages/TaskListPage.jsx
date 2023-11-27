import React from "react";
import { useNavigate } from "react-router-dom";
import TaskList from "../tasks-list/TaskList";

const TaskListPage = () => {
  const navigate = useNavigate();
  return (
    <TaskList
      onHandleAddTask={() => navigate(`/createForm`)}
      onHandleEditTask={(id) => navigate(`/editForm/${id}`)}
    />
  );
};

export default TaskListPage;
