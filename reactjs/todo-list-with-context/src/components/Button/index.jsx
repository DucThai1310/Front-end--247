import React from 'react';
import { styled } from 'styled-components';

function Button(props) {
  return (
    <ButtonContainer type='button' onClick={props.onClick}>
      {props.children}
    </ButtonContainer>
  );
}

export default Button;

const ButtonContainer = styled.button`
  color: #fff;
  background-color: #1976d2;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    opacity: 0.8;
  }
`;
