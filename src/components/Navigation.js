import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { signOutUser } from '../api/auth';

const NavStyle = styled.div`
  margin-top: 50px;
`;

export default function Navigation() {
  const history = useHistory();

  return (
    <NavStyle className="text-center mb-3">
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          onClick={() => history.push('/')}
          type="button"
          className="btn btn-light border border-dark"
        >
          Home
        </button>
        <button
          onClick={() => history.push('/completed')}
          type="button"
          className="btn btn-light border border-dark"
        >
          View Completed
        </button>
        <button
          onClick={() => history.push('/all')}
          type="button"
          className="btn btn-light border border-dark"
        >
          View All Todos
        </button>
        <button
          onClick={signOutUser}
          type="button"
          className="btn btn-danger border border-dark"
        >
          Log Out
        </button>
      </div>
    </NavStyle>
  );
}
