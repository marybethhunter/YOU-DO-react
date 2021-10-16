import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { deleteAllTodo, getAllTodos } from '../api/data/todoData';

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

export default function AllTodos({ setTodos, setEditItem }) {
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    getAllTodos().then(setAllTodos);
  }, []);

  const handleClick = (firebaseKey) => {
    deleteAllTodo(firebaseKey).then(setTodos);
  };

  return (
    <div>
      {allTodos.map((allTodo) => (
        <TodoStyle
          key={allTodo.firebaseKey}
          className="d-flex justify-content-between alert alert-light"
          role="alert"
          setTodos={setTodos}
          setEditItem={setEditItem}
        >
          {allTodo.name}
          <button
            onClick={() => handleClick(allTodo.firebaseKey)}
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

AllTodos.propTypes = {
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
