import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  margin: 5px;
  width: 100%;
  height: 100%;

  p {
    color: #fff;
    font-size: 16px;
    margin: 5px;
  }
  span {
    color: #c53030;
    padding: 5px;
    font-size: 14px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  box-sizing: border-box;
  width: 100%;
  max-width: 350px;
  margin: 5px;

  input {
    background-color: #343b41;
    align-items: center;
    flex: 1;
    max-width: 350px;
    font-size: 16px;
    height: 48px;
    border: 1px solid #343b41;
    border-radius: 5px;
    color: #fff;
    &::placeholder {
      padding: 10px;
      font-size: 16px;
    }
  }
`;
