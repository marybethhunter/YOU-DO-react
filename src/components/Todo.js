import React from 'react';
import PropTypes from 'prop-types';
import { updateToDo, deleteToDo } from '../api/data/todoData';

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
      <div className="alert alert-light" role="alert">
        {todo.complete ? (
          'Done'
        ) : (
          <button
            onClick={() => handleClick('update')}
            type="button"
            className="btn btn-success"
          >
            COMPLETE
          </button>
        )}
        {todo.name}
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
  }).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
