import styled from "styled-components";

export const Row = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: #d51e21ff;
  font-family: "DM Sans", sans-serif;
  font-size: 15px;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #920007ff;
  }

  svg {
    width: 18px;
    height: 18px;
    display: block;
  }
`;
