import styled from "styled-components";

export const ContainerGeral = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #121214;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 370px;
  background-color: #212529;

  form {
    display: flex;
    flex-direction: column;
    margin: 30px;
    width: 100%;
    max-width: 370;
    text-align: center;
  }

  h1 {
    font-family: "inter";
    font-weight: 700 bold;
    font-size: 18px;
    color: #FFF;
  }
  span {
    font-family: "inter";
    font-weight: 400 Regular;
    font-size: 12px;
    color: #868E96;
  }
  p{
    color: #FFF;
  }
`;
