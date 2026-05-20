import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 27px;
  border: 1px solid #9a9eab;
  border-radius: 8px;
`;

export const Label = styled.label`
  font-family: "DM Sans", sans-serif;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 7px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  font-family: "DM Sans", sans-serif;
  font-size: 15px;

  &:focus {
    border-color: #9a9eab;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px;
  border: none;
  border-radius: 6px;
  background: #db8b98ff;
  font-family: "DM Sans", sans-serif;
  font-size: 15px;
  color: white;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #5d535e;
  }

  svg {
    width: 18px;
    height: 18px;
    display: block;
  }
`;
