import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { deleteCompletedTodo, getCompletedTodos } from '../api/data/todoData';

const TodoStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;

  h5 {
    flex-grow: 2;
    width: 134px;
    height: 24px;
    font-family: Arial;
    color: #373a3c;
    font-size: 16px;
    display: flex;
    align-items: flex-end;
    margin-left: 20px;
    margin-top: 5px;
  }

  button {
    width: 110px;
    font-family: Arial;
    font-size: 16px;
    color: white;
    border-radius: 5px;
    margin: 3px;
  }
`;

export default function Completed() {
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getCompletedTodos().then((todoArray) => {
      if (isMounted) setCompletedTodos(todoArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleClick = (key) => {
    deleteCompletedTodo(key).then(setCompletedTodos);
  };

  return (
    <div>
      {completedTodos.map((completedTodo) => (
        <TodoStyle
          key={completedTodo.firebaseKey}
          className="d-flex justify-content-between alert alert-light"
          role="alert"
        >
          {completedTodo.name}
          <button
            onClick={() => handleClick(completedTodo.firebaseKey)}
            className="btn btn-danger"
            type="button"
          >
            DELETE
          </button>
        </TodoStyle>
      ))}
    </div>
  );
}
