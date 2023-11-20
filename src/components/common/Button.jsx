import React from 'react'
import styled from 'styled-components';
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & button {
    background-color: black;
    color: white;
    font-size: 16px;
    padding: 6px 12px;
    cursor: pointer;
  }
`;

function Button({text, onClick=()=>{}}) {
  return (
    <ButtonWrapper>
        <button onClick={onClick}>{text}</button>
      </ButtonWrapper>
  )
}

export default Button
