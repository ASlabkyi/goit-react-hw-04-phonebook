import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
`;

export const Name = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const Number = styled.span`
  font-size: 16px;
`;

export const DeleteButton = styled.button`
  padding: 6px 12px;
  font-size: 14px;
  color: #fff;
  background-color: #f00;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #c00;
  }
`;
