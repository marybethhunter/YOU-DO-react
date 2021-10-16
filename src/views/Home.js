import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Todo from '../components/Todo';

const CategoryStyle = styled.h6`
  color: white;
  display: flex;
  justify-content: left;
`;

export default function Home({ todos, setTodos, setEditItem }) {
  return (
    <div>
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
    </div>
  );
}

Home.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
