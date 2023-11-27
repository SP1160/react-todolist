import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import TaskEditor from "../task-editor/TaskEditor";

const TaskEditorEditPage = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  return <TaskEditor initialId={+taskId} onHomePage={() => navigate("/")} />;
};

export default TaskEditorEditPage;
