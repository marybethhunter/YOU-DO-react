import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.h1`
  text-align: center;
  color: white;
  font-size: 49px;
  font-family: Arial;
  font-weight: normal;
`;

export default function Header() {
  return <HeaderStyle>YOU-DO</HeaderStyle>;
}
