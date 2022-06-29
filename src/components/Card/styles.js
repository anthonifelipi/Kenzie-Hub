import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
  background-color: #121214;

  h1 {
    font-family: "inter";
    font-weight: 700 bold;
    font-size: 18px;
    color: #fff;
    text-align: left;
    margin: 15px;
  }

  h2 {
    font-size: 14px;
    color: #fff;
    margin-left: 10px;
  }
  span {
    font-family: "inter";
    font-weight: 400 Regular;
    font-size: 12px;
    color: #868e96;
    margin: 15px;
    text-align: left;
  }
`;
export const DivTecnologia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 700px;
  background-color: #121214;

  h1 {
    font-family: "inter";
    font-weight: 700 bold;
    font-size: 18px;
    color: #fff;
    text-align: left;
    margin: 15px 0px 15px 35px;
  }

  button {
    width: 32px;
    height: 32px;
    text-align: center;
    background: #212529;
    border-radius: 4px;
    color: #fff;
    font-size: 24px;
    margin: 15px 35px 15px 0px;
    cursor: pointer;
  }
`;

export const Tecnologias = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 10px;
  max-width: 700px;
  background-color: #212529;
  padding: 15px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    border-radius: 5px;
    flex: 1;
    background-color: #121214;
    margin: 15px;
  }
  h2 {
    font-size: 14px;
    color: #fff;
    margin-left: 10px;
  }
  span {
    font-family: "inter";
    font-weight: 400 Regular;
    font-size: 12px;
    color: #868e96;
    margin: 15px;
    text-align: left;
  }

  button{
    background-color: #212529;
    border: none;
    color: #FFF;
    border-radius: 15px;
    font-size: 12px;
    cursor: pointer;
  }
`;