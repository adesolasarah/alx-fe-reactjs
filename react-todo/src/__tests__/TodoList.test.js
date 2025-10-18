import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos correctly", () => {
    render(<TodoList />);

    // Check that the heading is rendered
    expect(screen.getByText("Todo List")).toBeInTheDocument();

    // Check that initial demo todos are rendered
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a project")).toBeInTheDocument();
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    // Type into input
    const input = screen.getByPlaceholderText("Add a new todo");
    fireEvent.change(input, { target: { value: "New Todo Item" } });

    // Submit form
    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);

    // Verify new todo appears in the list
    expect(screen.getByText("New Todo Item")).toBeInTheDocument();
  });

  test("toggles a todo between completed and not completed", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");

    // Initially not completed
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");

    // Click to toggle
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    // Click again to toggle back
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
  render(<TodoList />);

  // Click the delete button for "Build a project"
  const deleteButton = screen.getByTestId("delete-Build a project");
  fireEvent.click(deleteButton);

  // After deletion, the todo should no longer be in the document
  expect(screen.queryByText("Build a project")).not.toBeInTheDocument();
});

});
