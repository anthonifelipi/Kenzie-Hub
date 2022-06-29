import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #212529;
  border-radius: 5px;
  border: none;
  box-sizing: border-box;
  width: 100%;
  max-width: 350px;
  margin: 5px;

  p {
    color: #FFF;
    font-size: 16px;
    margin: 5px;
  }
`;

export const ContainerSelect = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  box-sizing: border-box;
  width: 100%;
  max-width: 350px;

  select {
    background-color: #343b41;
    align-items: center;
    flex: 1;
    max-width: 350px;
    font-size: 16px;
    height: 48px;
    border: 1px solid #343b41;
    border-radius: 5px;
    color: #fff;
  }
`;
