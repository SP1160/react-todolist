import React from "react";
import TaskEditor from "../task-editor/TaskEditor";
import { useNavigate } from "react-router-dom";

const TaskEditorCreatePage = () => {
  const navigate = useNavigate();
  return <TaskEditor onHomePage={() => navigate("/")} />;
};

export default TaskEditorCreatePage;
