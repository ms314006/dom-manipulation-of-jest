# This is a base todolist use HTML and JavaScript write!

```HTML
<html>
  <body>
    <input id="newTodo" />
    <button onclick="addTodo()">Add todo</button>
    <ol id="todoList"></ol>
    <script>
      const addTodo = () => {
        const newTodoInput = document.getElementById('newTodo');
        let currentTodoList = document.getElementById('todoList').innerHTML;
        currentTodoList += `<li>${newTodoInput.value}</li>`;
        document.getElementById('todoList').innerHTML = currentTodoList;
        newTodoInput.value = '';
      }
    </script>
  </body>
</html>
```

I don't know how to test HTML dom without framework? But I think I should disassembling HTML and JavaScript first, follow [hear]()!
