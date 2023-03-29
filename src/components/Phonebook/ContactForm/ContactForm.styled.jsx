import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 5px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: dodgerblue;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  color: #fff;
  background-color: dodgerblue;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e90ff;
  }

  &:active {
    background-color: #007acc;
  }
`;
