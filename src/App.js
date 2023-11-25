import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Error, CreateForm, EditForm } from "./pages";
import TaskListPage from "./pages/TaskListPage";
import TaskEditorPage from "./pages/TaskEditorPage";
import AxiosMock from "./utils/AxiosMock";
import mockConfig from "./utils/mockConfig";

const App = () => {
  return (
    <AxiosMock config={mockConfig}>
      <Routes>
        <Route path="/" element={<TaskListPage />} />
        {/* <Route path="/createForm" element={<CreateForm />} /> */}
        <Route path="/editForm/:taskId" element={<TaskEditorPage />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </AxiosMock>
  );
};

export default App;
