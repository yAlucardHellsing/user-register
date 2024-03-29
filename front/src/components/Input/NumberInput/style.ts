import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  margin-top: 10px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.mainThemeColor};
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.inputColor};
  border: 1px solid ${({ theme }) => theme.mainThemeColor};
  margin-left: 2px;
  padding: 9px 5px;
  color: ${({ theme }) => theme.textColor};
  outline: none;
`;

export const Error = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  margin-left: 2px;
  max-width: 366px;
`;
