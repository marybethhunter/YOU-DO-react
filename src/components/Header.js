import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.h1`
  width: 250px;
  left: 596px;
  top: 32px;
  height: 87px;
  color: white;
  font-family: Arial;
  font-weight: normal;
  line-height: 87px;
  font-size: 49px;
  align-items: center;
  position: absolute;
  text-align: center;
`;

export default function Header() {
  return <HeaderStyle>YOU-DO</HeaderStyle>;
}
