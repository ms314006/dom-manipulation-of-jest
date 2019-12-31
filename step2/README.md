# Now disassemble the HTML and JavaScript

HTML
```html
<html>
  <body>
    <input id="newTodo" />
    <button id="addTodo">Add todo</button>
    <ol id="todoList"></ol>

    <script type="text/javascript" src="./index.js"></script>
  </body>
</html>
```

JavaScript
```javascript
const addTodo = () => {
  const newTodoInput = document.getElementById('newTodo');
  let currentTodoList = document.getElementById('todoList').innerHTML;
  currentTodoList += `<li>${newTodoInput.value}</li>`;
  document.getElementById('todoList').innerHTML = currentTodoList;
  newTodoInput.value = '';
}

document.getElementById('addTodo').addEventListener('click', addTodo);
```

The purpose is would logic of control todolist disassemble, So that our easy to join unit test!
