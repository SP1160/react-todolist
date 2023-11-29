import React from "react";
import TaskEditorContainer from "./TaskEditorContainer";

const TaskEditorTestContainer = () => {
  const initialId = 1;

  return <TaskEditorContainer initialId={initialId} />;
};

export default {
  component: TaskEditorTestContainer,
  title: "TaskEditor",
};

export const Default = {};
