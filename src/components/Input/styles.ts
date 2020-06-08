import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
  border: 2px solid #fff;
  border-radius: 8px;
  padding: 18px 24px;
  font-size: 16px;
  color: #b7b7cc;

  & + div {
    margin-top: 16px;
  }

  ${ props => 
    props.isFocused && 
    css`
      border-color: #34CB79; 
      color: #34CB79;
  `}

  ${ props => 
    props.isFilled && 
    css`
      color: #34CB79;  
  `}

  input {
    flex: 1;
    border: 0;
    outline: none;
    width: 100%;
    
    &::placeholder {
      color: #b7b7cc;
    }
  }

  svg {
    margin-right: 10px;
  }
`;
