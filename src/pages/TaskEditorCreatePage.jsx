import React from "react";
import { useNavigate } from "react-router-dom";
import TaskEditor from "../task-editor/TaskEditor";

const TaskEditorCreatePage = () => {
  const navigate = useNavigate();
  return <TaskEditor onHomePage={() => navigate("/")} />;
};

export default TaskEditorCreatePage;
