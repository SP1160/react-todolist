import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskListContainer from "./__stories__/TaskListContainer";

describe("TaskListContainer", () => {
  test("Удаление задачи", async () => {
    render(<TaskListContainer />);

    await waitFor(() => {
      const buttonDetele = screen.getAllByTestId("btn-delete")[0];
      window.confirm = jest.fn(() => true);
      userEvent.click(buttonDetele);
      expect(screen.queryByText(/do something/i)).toBeNull();
    });
  });

  test("Выполнение задачи", async () => {
    render(<TaskListContainer />);

    await waitFor(() => {
      const buttonComplete = screen.getAllByTestId("btn-complete")[0];
      userEvent.click(buttonComplete);
      expect(screen.getByText(/do something/i).parentElement).toHaveClass(
        "d-flex align-items-center list-group-item list-group-item-secondary",
      );
    });
  });
});
