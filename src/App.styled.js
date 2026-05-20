import styled from "styled-components";

export const AppWrapper = styled.div`
  max-width: 420px;
  margin: 40px auto;
  padding: 20px;
  font-family: "DM Sans", sans-serif;
`;

export const Title = styled.h1`
  font-family: "Cabin", sans-serif;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg {
    width: 28px;
    height: 28px;
    display: block;
  }
`;

export const Subtitle = styled.h2`
  font-family: "Cabin", sans-serif;
  margin-top: 20px;
`;
