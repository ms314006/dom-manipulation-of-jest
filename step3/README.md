# Start join unit test!

The now! HTML is HTML, JavaScript is JavaScript, so we can would unit test focus on JavaScript! but we not have DOM, why can manipulation DOM to target JavaScript? you can make a virtual DOM for unit test need!

```
npm init -y
npm install --save-dev jest @testing-library/dom
```

Next, find out really important that features of web application, and your would make key DOM, example `todolist.js` need `input`, `button` and `ol`, so about this `todolist.js`, we have to make:

```html
<input id="newTodo" />
  <button id="addTodo">Add todo</button>
<ol id="todoList"></ol>
```

If we have these dom than `todolist.js` can be working!

So in the test file, we make a virtual DOM first, the following code I add feature on element such as `data-testid`:

```javascript
document.body.innerHTML = `
  <input id="newTodo" data-testid="newTodo" />
  <button id="addTodo">Add todo</button>
  <ol id="todoList" data-testid="todoList"></ol>
`;
```

Okay! on the other hand, also import `todolist.js`, this file have logic of features:

```javascript
require('../todolist.js');
```
Now we can get element by `getByText` or `getByTestId`, these method is `@testing-library/dom` provid:

```javascript
const { getByText, getByTestId, fireEvent } = require('@testing-library/dom');

const container = document.body;
const input = getByTestId(container, 'newTodo');
const button = getByText(container, 'Add todo');

input.value = 'First todolist!';
```

Last, use `fireEvent` of `@testing-library/dom` simulation target event, and expect by `jest` framework!

```javascript
fireEvent.click(button);

const todolist = getByTestId(container, 'todoList');
expect(todolist.innerHTML).toBe('<li>First todolist!</li>');
```
