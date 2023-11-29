import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskEditorContainer from "./__stories__/TaskEditorContainer";

describe("TaskEditorContainer", () => {
  const taskNameInputPlaceholder = /enter your task/i;
  const taskPrioritySelectLabel = /priority/i;
  const btnSubmitText = "btn-ok";
  const btnCancelText = "btn-cancel";

  test("Create - Отправка данных", async () => {
    const mockTaskCreated = jest.fn();

    render(<TaskEditorContainer onTaskCreated={mockTaskCreated} />);

    await userEvent.type(screen.getByPlaceholderText(taskNameInputPlaceholder), "Test Task");
    await userEvent.selectOptions(screen.getByLabelText(taskPrioritySelectLabel), "1");

    await userEvent.click(screen.getByTestId(btnSubmitText));

    expect(mockTaskCreated).toHaveBeenCalledWith({ name: "Test Task", priority: "1" });
  });

  test("Create - Очистка данные при нажатии на кнопку Cancel", async () => {
    render(<TaskEditorContainer />);

    await userEvent.type(screen.getByPlaceholderText(taskNameInputPlaceholder), "gijreijgie");
    await userEvent.selectOptions(screen.getByLabelText(taskPrioritySelectLabel), "2");
    await userEvent.click(screen.getByTestId(btnCancelText));

    expect(screen.getByPlaceholderText(taskNameInputPlaceholder)).toHaveValue("");
    expect(screen.getByLabelText(taskPrioritySelectLabel)).toHaveValue("1");
  });

  test("Edit - Проверка изначального значения", async () => {
    render(<TaskEditorContainer initialId={1} />);

    await waitFor(() => {
      expect(screen.getByPlaceholderText(taskNameInputPlaceholder)).toHaveValue("Do something");
      expect(screen.getByLabelText(taskPrioritySelectLabel)).toHaveValue("1");
    });
  });

  test("Edit - Возвращение изначального значения при нажати на кнопку Cancel", async () => {
    render(<TaskEditorContainer initialId={2} />);

    await userEvent.type(screen.getByPlaceholderText(taskNameInputPlaceholder), "What are u doing");
    await userEvent.selectOptions(screen.getByLabelText(taskPrioritySelectLabel), "3");
    await userEvent.click(screen.getByTestId(btnCancelText));

    expect(screen.getByPlaceholderText(taskNameInputPlaceholder)).toHaveValue("Hello World");
    expect(screen.getByLabelText(taskPrioritySelectLabel)).toHaveValue("2");
  });

  test("Edit - Редактирование данных и их отправка", async () => {
    const mockTaskEdited = jest.fn();

    render(<TaskEditorContainer initialId={3} onTaskEdited={mockTaskEdited} />);

    await userEvent.type(screen.getByPlaceholderText(taskNameInputPlaceholder), "Edited Task");
    await userEvent.selectOptions(screen.getByLabelText(taskPrioritySelectLabel), "2");

    await userEvent.click(screen.getByTestId(btnSubmitText));

    expect(mockTaskEdited).toHaveBeenCalledWith({
      id: 3,
      name: "Edited Task",
      priority: "2",
      isCompleted: false,
    });
  });
});
