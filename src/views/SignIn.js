import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { signInUser } from '../api/auth';

const WelcomeStyle = styled.h1`
  color: white;
`;

export default function SignIn({ user }) {
  return (
    <>
      {user === null ? (
        <WelcomeStyle>Loading...</WelcomeStyle>
      ) : (
        <div className="text-center mt-5">
          <WelcomeStyle>Welcome! Sign In!</WelcomeStyle>
          <button
            type="button"
            className="btn btn-success"
            onClick={signInUser}
          >
            Sign In
          </button>
        </div>
      )}
    </>
  );
}

SignIn.propTypes = {
  user: PropTypes.node,
};

SignIn.defaultProps = {
  user: null,
};
