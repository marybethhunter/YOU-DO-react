import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getTodos } from '../api/data/todoData';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import Header from '../components/Header';

const CategoryStyle = styled.h6`
  color: white;
  display: flex;
  justify-content: left;
`;

function Initialize() {
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  return (
    <>
      <Header />
      <TodoForm obj={editItem} setTodos={setTodos} setEditItem={setEditItem} />
      <CategoryStyle>Cat 1</CategoryStyle>
      {todos.map((todo) => (todo.undefined === 'cat1' ? (
        <Todo
          key={todo.firebaseKey}
          todo={todo}
          setTodos={setTodos}
          setEditItem={setEditItem}
        />
      ) : null))}
      <CategoryStyle>Cat 2</CategoryStyle>
      {todos.map((todo) => (todo.undefined === 'cat2' ? (
        <Todo
          key={todo.firebaseKey}
          todo={todo}
          setTodos={setTodos}
          setEditItem={setEditItem}
        />
      ) : null))}
      <CategoryStyle>Cat 3</CategoryStyle>
      {todos.map((todo) => (todo.undefined === 'cat3' ? (
        <Todo
          key={todo.firebaseKey}
          todo={todo}
          setTodos={setTodos}
          setEditItem={setEditItem}
        />
      ) : null))}
    </>
  );
}

export default Initialize;
