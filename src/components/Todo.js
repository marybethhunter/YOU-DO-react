import React from 'react';
import PropTypes from 'prop-types';

export default function Todo({ todo }) {
  return (
    <>
      <div className="alert alert-light" role="alert">
        <button type="button" className="btn btn-success">
          COMPLETE
        </button>
        {todo.name}
        <button type="button" className="btn btn-danger">
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
  }).isRequired,
};
