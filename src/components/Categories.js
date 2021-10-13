import React from 'react';
import styled from 'styled-components';

const CategoryStyle = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  left: 399px;
  top: 200px;
  position: absolute;

  div {
    height: 350px;
    width: 643px;
  }
`;

export default function Categories() {
  return (
    <CategoryStyle>
      <div>Cat 1</div>
      <div>Cat 2</div>
      <div>Cat 3</div>
    </CategoryStyle>
  );
}
