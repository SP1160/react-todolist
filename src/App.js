import React from "react";
import { Routes, Route } from "react-router-dom";
import TaskListPage from "./pages/TaskListPage";
import TaskEditorCreatePage from "./pages/TaskEditorCreatePage";
import TaskEditorEditPage from "./pages/TaskEditorEditPage";
import Error from "./pages/Error";
import AxiosMock from "./utils/AxiosMock";
import mockConfig from "./utils/mockConfig";

const App = () => {
  return (
    <AxiosMock config={mockConfig}>
      <Routes>
        <Route path="/" element={<TaskListPage />} />
        <Route path="/createForm" element={<TaskEditorCreatePage />} />
        <Route path="/editForm/:taskId" element={<TaskEditorEditPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AxiosMock>
  );
};

export default App;
