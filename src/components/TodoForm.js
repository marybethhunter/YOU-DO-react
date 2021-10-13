import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect } from 'react/cjs/react.development';
import { createTodo, updateToDo } from '../api/data/todoData';

const DivStyle = styled.div`
  display: flex;
`;

const InputStyle = styled.input`
  width: 438px;
  height: 38px;
  position: absolute;
  left: 399px;
  top: 145px;
  background-color: #ffffff;
  border: 1px solid #66afe9;
  box-sizing: border-box;
  border-radius: 4px;
`;

const ButtonStyle = styled.button`
  width: 100px;
  height: 38px;
  position: absolute;
  left: 945px;
  top: 145px;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
`;

const DropDownStyle = styled.select`
  width: 100px;
  height: 38px;
  position: absolute;
  left: 840px;
  top: 146px;
  border-radius: 5px;
  font-family: Arial;
  font-size: 12px;
`;

const initialState = {
  name: '',
  complete: false,
  uid: '',
};

export default function TodoForm({ obj, setTodos, setEditItem }) {
  const [formInput, setFormInput] = useState(initialState);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCategoryChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.category]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormInput({ ...initialState });
    setEditItem({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateToDo(formInput).then((todos) => {
        setTodos(todos);
        resetForm();
      });
    } else {
      createTodo({ ...formInput, date: new Date() }).then((todos) => {
        setTodos(todos);
      });
      resetForm();
    }
  };

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        name: obj.name,
        firebaseKey: obj.firebaseKey,
        complete: obj.complete,
        date: obj.date,
        uid: obj.uid,
        undefined: obj.undefined,
      });
    }
  }, [obj]);

  return (
    <DivStyle>
      <form onSubmit={handleSubmit}>
        <InputStyle
          name="name"
          id="name"
          value={formInput.name}
          onChange={handleChange}
          placeholder="ADD A YOU-DO"
          required
        />
        <DropDownStyle
          className="form-select"
          name="undefined"
          id="undefined"
          value={formInput.category}
          onChange={handleCategoryChange}
          aria-label="category"
        >
          <option selected>Category</option>
          <option value="cat1">Cat 1</option>
          <option value="cat2">Cat 2</option>
          <option value="cat3">Cat 3</option>
        </DropDownStyle>
        <ButtonStyle className="btn btn-success" type="submit">
          {obj.firebaseKey ? 'UPDATE' : 'SUBMIT'}
        </ButtonStyle>
      </form>
    </DivStyle>
  );
}

TodoForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    uid: PropTypes.string,
    undefined: PropTypes.string,
  }),
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};

TodoForm.defaultProps = {
  obj: {},
};
