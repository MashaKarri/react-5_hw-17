import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin-bottom: 10px;
  gap: 5px;
`;

export const FilterInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-family: "DM Sans", sans-serif;
  font-size: 15px;

  &:focus {
    outline: none;
    border-color: #9a9eab;
  }
`;
