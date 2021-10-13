import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { updateToDo, deleteToDo } from '../api/data/todoData';

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

export default function Todo({ todo, setTodos, setEditItem }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteToDo(todo.firebaseKey).then(setTodos);
    } else {
      updateToDo({ ...todo, complete: true }).then(setTodos);
    }
  };

  return (
    <>
      <div>
        <TodoStyle className="alert alert-light" role="alert">
          {todo.complete ? (
            <button type="button" className="btn btn-success">
              DONE
            </button>
          ) : (
            <button
              onClick={() => handleClick('update')}
              type="button"
              className="btn btn-success"
            >
              COMPLETE
            </button>
          )}
          <h5>{todo.name}</h5>
          <button
            onClick={() => setEditItem(todo)}
            type="button"
            className="btn btn-info"
          >
            EDIT
          </button>
          <button
            onClick={() => handleClick('delete')}
            type="button"
            className="btn btn-danger"
          >
            DELETE
          </button>
        </TodoStyle>
      </div>
    </>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    name: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    uid: PropTypes.string,
    firebaseKey: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
