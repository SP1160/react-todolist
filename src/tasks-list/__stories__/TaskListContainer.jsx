import React from "react";
import AxiosMock from "../../utils/AxiosMock";
import mockConfig from "../../utils/mockConfig";
import TaskList from "../TaskList";

const TaskListContainer = (props) => (
  <AxiosMock config={mockConfig}>
    <TaskList {...props} />
  </AxiosMock>
);

export default TaskListContainer;
