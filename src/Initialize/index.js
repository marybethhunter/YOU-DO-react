import React, { useState, useEffect } from 'react';
import { getTodos } from '../api/data/todoData';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import Header from '../components/Header';
import Categories from '../components/Categories';

function Initialize() {
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  return (
    <div>
      <Header />
      <TodoForm obj={editItem} setTodos={setTodos} setEditItem={setEditItem} />
      <Categories />
      {todos.map((todo) => (
        <Todo
          key={todo.firebaseKey}
          todo={todo}
          setTodos={setTodos}
          setEditItem={setEditItem}
        />
      ))}
    </div>
  );
}

export default Initialize;
