import { useEffect } from "react";
import AxiosMock from "../../utils/AxiosMock";
import mockConfig from "../../utils/mockConfig";
import TaskEditor from "../TaskEditor";

const TaskEditorContainer = ({ initialId, onTaskCreated = () => {}, onTaskEdited = () => {} }) => {
  useEffect(() => {
    if (initialId) {
      window.addEventListener("editTask", (e) => {
        onTaskEdited(e.detail);
      });
    } else {
      window.addEventListener("createTask", (e) => {
        onTaskCreated(e.detail);
      });
    }
  }, []);

  return (
    <AxiosMock config={mockConfig}>
      <TaskEditor initialId={initialId} />
    </AxiosMock>
  );
};

export default TaskEditorContainer;
