const { getByText, getByTestId, fireEvent } = require('@testing-library/dom');

test('Check add list to todoList', () => {
  // Arrange
  // Ready necessary DOM on this unit test
  document.body.innerHTML = `
    <input id="newTodo" data-testid="newTodo" />
    <button id="addTodo">Add todo</button>
    <ol id="todoList" data-testid="todoList"></ol>
  `;

  // Import test logic
  require('../todolist.js');

  // From DOM get necessary element, ex input and button
  const container = document.body;
  const input = getByTestId(container, 'newTodo');
  const button = getByText(container, 'Add todo');

  // Act
  input.value = 'First todolist!';
  fireEvent.click(button);

  // Assert
  const todolist = getByTestId(container, 'todoList');
  expect(todolist.innerHTML).toBe('<li>First todolist!</li>');
});
