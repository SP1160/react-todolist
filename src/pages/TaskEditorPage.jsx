import React from "react";
import { useParams } from "react-router-dom";
import TaskEditor from "../task-editor/TaskEditor";

const TaskEditorPage = () => {
  const { taskId } = useParams();
  return <TaskEditor initialId={+taskId} />;
};

export default TaskEditorPage;
