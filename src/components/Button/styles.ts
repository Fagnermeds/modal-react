import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin-top: 16px;
  height: 56px;
  background: #34CB79;
  border-radius: 10px;
  border: 0;
  padding: 16px;
  color: #fff;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#34CB79')};
  }
`;