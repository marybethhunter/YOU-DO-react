import React, { useState, useEffect } from 'react';
import { getTodos } from '../api/data/todoData';
import TodoForm from '../components/TodoForm';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Routes from '../routes';

function Initialize() {
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    getTodos(false).then(setTodos);
  }, []);

  return (
    <>
      <Navigation />
      <Header />
      <TodoForm obj={editItem} setTodos={setTodos} setEditItem={setEditItem} />
      <Routes todos={todos} setTodos={setTodos} setEditItem={setEditItem} />
    </>
  );
}

export default Initialize;
